import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { FormattedMessage, useIntl } from 'react-intl';
import { NotificationManager } from 'react-notifications';
import StripeCheckoutFormSca from '../stripe/StripeCheckoutFormSca';
import filterUnique from '../../utils/filterUnique';
import Loading from '../loading';
import RadioField from '../../elements/radioField';
import Button from '../../elements/button';
import isEmpty from '../../utils/isEmpty/isEmpty';

const CreditCardList = ({
  getStripeCreditCardlist,
  postStripeCreditCard,
  stripeCreditCardList,
  stripeCreditCard,
  showAddBtnCreditCard,
  selectedCard,
  env,

  isErrorSelectCard,
}) => {
  const [isRadioCc, setIsRadioCc] = useState(null);
  const [listStripeCreditCard, setListStripeCreditCard] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);

  const intl = useIntl();

  useEffect(() => {
    getStripeCreditCardlist();
  }, []);

  useEffect(() => {
    if (stripeCreditCardList.code === 200) {
      setListStripeCreditCard(stripeCreditCardList.data);
      setIsLoading(false);
    }
  }, [stripeCreditCardList]);

  useEffect(() => {
    if (isEmpty(stripeCreditCard)) return;

    if (stripeCreditCard.code === 200) {
      setListStripeCreditCard([...listStripeCreditCard, ...[stripeCreditCard.data]]);
      setShowCreditCardForm(false);
      setDisableButton(false);
    } else {
      NotificationManager.error(
        intl.formatMessage({ id: 'crowdfunding.payment.error.message' }),
        intl.formatMessage({ id: 'crowdfunding.payment.error.title' }),
        15000
      );
      setDisableButton(false);
    }
  }, [stripeCreditCard]);

  const handleChange = ({ error }, field) => {
    setDisableButton(false);
    const receivedErrors = { ...errors };

    if (error) {
      receivedErrors[field] = {
        [error.code]: error.message,
      };
    } else {
      delete receivedErrors[field];
    }

    setErrors(receivedErrors);
  };

  const submit = async (stripe, elements) => {
    // eslint-disable-next-line no-unused-vars
    const cardElement = elements.getElement('cardNumber');
    setDisableButton(true);
    const { token, error } = await stripe.createToken();
    if (token) {
      postStripeCreditCard({ source: token.id });
    } else if (error) {
      NotificationManager.error(error.message, '', 15000);
      setDisableButton(false);
    }
  };

  const handdleSelect = e => {
    setIsRadioCc(e.target.value);
    selectedCard(e.target.value);
  };

  const newArray = filterUnique(listStripeCreditCard, 'last4');

  const validDate = (year, month) => {
    const today = new Date();
    const someday = new Date();
    someday.setFullYear(year, month, 1);

    if (someday < today) {
      return true;
    }
    return false;
  };

  return (
    <div className="stripe-checkout cards-list">
      <p className="font-weight-bold">
        <FormattedMessage id="creditcard.info.title" />
      </p>
      {isLoading && <Loading />}
      {!isLoading && (
        <ul className="list-group list-group-flush">
          <>
            {newArray.length > 0 ? (
              newArray.map(stripeCreditCard => (
                <li key={stripeCreditCard.last4} className="list-group-item">
                  <RadioField
                    label={
                      !validDate(stripeCreditCard.exp_year, stripeCreditCard.exp_month) ? (
                        <FormattedMessage
                          id="creditcard.number"
                          values={{
                            value: stripeCreditCard.last4,
                            date: `${stripeCreditCard.exp_month}/${stripeCreditCard.exp_year}`,
                          }}
                        />
                      ) : (
                        <FormattedMessage
                          id="creditcard.number.expired"
                          values={{
                            value: stripeCreditCard.last4,
                            date: `${stripeCreditCard.exp_month}/${stripeCreditCard.exp_year}`,
                          }}
                        />
                      )
                    }
                    onChange={e => handdleSelect(e)}
                    value={stripeCreditCard.last4}
                    checked={isRadioCc === stripeCreditCard.last4}
                    disabled={validDate(stripeCreditCard.exp_year, stripeCreditCard.exp_month)}
                  />
                </li>
              ))
            ) : (
              <li className="list-group-item">
                <FormattedMessage id="creditcard.no.cards" />
              </li>
            )}
            {isErrorSelectCard && isRadioCc === null && (
              <span className="hasError text-danger">
                <FormattedMessage id="creditcard.notSelected" />
              </span>
            )}
          </>
          {showAddBtnCreditCard && (
            <li className="list-group-item">
              <div className="d-flex justify-content-end">
                <Button
                  extraClass="link"
                  onClick={() => setShowCreditCardForm(!showCreditCardForm)}
                  text={intl.formatMessage({ id: 'creditcard.add.card' })}
                />
              </div>
            </li>
          )}
        </ul>
      )}
      {showCreditCardForm && (
        <StripeProvider apiKey={env.publishableKey}>
          <div className="stripe-credit-card-checkout">
            <Elements>
              <div className="box mt-4">
                <StripeCheckoutFormSca
                  handleChange={handleChange}
                  submit={submit}
                  errors={errors}
                  disableButton={disableButton}
                  btnText={intl.formatMessage({ id: 'save' })}
                />
              </div>
            </Elements>
          </div>
        </StripeProvider>
      )}
    </div>
  );
};

CreditCardList.propTypes = {
  env: PropTypes.shape({
    publishableKey: PropTypes.string.isRequired,
  }),
  getStripeCreditCardlist: PropTypes.func.isRequired,
  postStripeCreditCard: PropTypes.func.isRequired,
  selectedCard: PropTypes.func,
  showAddBtnCreditCard: PropTypes.any,
  stripeCreditCard: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.object,
    exp_month: PropTypes.string,
    exp_year: PropTypes.string,
    last4: PropTypes.string,
  }),
  stripeCreditCardList: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.array,
  }),

  isErrorSelectCard: PropTypes.bool,
};

export default CreditCardList;
