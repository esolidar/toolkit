import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { NotificationManager } from 'react-notifications';
import { isEmpty } from 'lodash';
import StripeCheckoutFormSca from '../stripe/StripeCheckoutFormSca';
import { filterUnique } from '../../utils';
import Loading from '../loading/Loading';
import RadioField from '../../elements/radioField/RadioField';

const CreditCardList = ({
  getStripeCreditCardlist,
  postStripeCreditCard,
  stripeCreditCardList,
  stripeCreditCard,
  showAddBtnCreditCard,
  selectedCard,
  env,
  translateMessage,
  isErrorSelectCard,
}) => {
  const [isRadioCc, setIsRadioCc] = useState(null);
  const [listStripeCreditCard, setListStripeCreditCard] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);

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
        translateMessage({
          id: 'credit.card.error.message',
          defaultMessage: 'An error has occurred, please try again!',
        }),
        translateMessage({
          id: 'errror',
          defaultMessage: 'Error:',
        }),
        15000
      );
      setDisableButton(false);
    }
  }, [stripeCreditCard]);

  const handleChange = ({ error }) => {
    setDisableButton(false);
    if (error) {
      errors[error.code] = error.message;
      setErrors(errors);
    } else {
      setErrors({});
    }
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
        <FormattedMessage id="creditcard.info.title" defaultMessage="Credit card details" />
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
                        <FormattedHTMLMessage
                          id="creditcard.number"
                          defaultMessage="Credit card number: xxxx xxxx xxxx {value} - Expires: {date}"
                          values={{
                            value: stripeCreditCard.last4,
                            date: `${stripeCreditCard.exp_month}/${stripeCreditCard.exp_year}`,
                          }}
                        />
                      ) : (
                        <FormattedHTMLMessage
                          id="creditcard.number.expired"
                          defaultMessage="Credit card number: xxxx xxxx xxxx {value} - <span class='expired'>Expired: {date}</span>"
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
                <FormattedMessage id="creditcard.no.cards" defaultMessage="No credit card" />
              </li>
            )}
            {isErrorSelectCard && isRadioCc === null && (
              <span className="hasError text-danger">
                <FormattedMessage
                  id="creditcard.notSelected"
                  defaultMessage="You must select a credit card"
                />
              </span>
            )}
          </>
          {showAddBtnCreditCard && (
            <li className="list-group-item">
              <div className="text-right">
                <button
                  type="button"
                  className="add-card"
                  onClick={() => setShowCreditCardForm(!showCreditCardForm)}
                >
                  <FormattedMessage id="creditcard.add.card" defaultMessage="Add new card" />
                </button>
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
                  errors={{}}
                  disableButton={disableButton}
                  btnText={translateMessage({ id: 'creditcard.save', defaultMessage: 'Save' })}
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
  translateMessage: PropTypes.func.isRequired,
  isErrorSelectCard: PropTypes.bool,
};

export default CreditCardList;
