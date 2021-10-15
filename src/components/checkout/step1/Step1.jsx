import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import Button from '../../../elements/button';
import CrowdfundingItem from '../products/CrowdfundingItem';

const Step1 = props => {
  const {
    env,
    state,
    nextStep,
    onChangeMessage,
    onChangCheckBox,
    removeCartItem,
    onAddToCheckout,
  } = props;
  const intl = useIntl();

  const cartItems = state.order.products;

  if (typeof window === 'undefined' && cartItems.length === 0) return <div />;

  const renderCartItems = () => {
    if (cartItems.length > 0) {
      return cartItems.map((item, indx) => {
        if (item.type === 'crowdfunding' || item.type === 'campaign') {
          return (
            <div key={`${item.id}_${indx}`}>
              {indx === 0 && <h2>Crowdfunding</h2>}
              <div>
                <CrowdfundingItem
                  item={item}
                  indx={indx}
                  onChangeMessage={onChangeMessage}
                  onChangCheckBox={onChangCheckBox}
                  removeCartItem={removeCartItem}
                  onAddToCheckout={onAddToCheckout}
                  env={env}
                  totalItems={cartItems.length}
                />
              </div>
            </div>
          );
        }
      });
    }
    return (
      <div className="no-items">
        <h1>{intl.formatMessage({ id: 'checkout.noitems' })}</h1>
      </div>
    );
  };

  return (
    <div className="checkout">
      {renderCartItems()}
      {cartItems.length > 0 && (
        <Row>
          <Col sm={12} className="text-right">
            <div className="box d-flex justify-content-end">
              <Button
                extraClass="success-full next-step"
                onClick={() => nextStep(1)}
                text={intl.formatMessage({ id: 'crowdfunding.donation.checkout.next' })}
              />
            </div>
          </Col>
        </Row>
      )}
      {cartItems.length === 0 && (
        <Row>
          <Col sm={12} className="text-center">
            <div className="box">
              <a className="btn-next-step" href="/">
                {intl.formatMessage({ id: 'crowdfunding.donation.checkout.goHome' })}
              </a>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

Step1.propTypes = {
  state: PropTypes.shape({
    order: PropTypes.shape({
      currency: PropTypes.object,
      products: PropTypes.array,
    }),
    errors: PropTypes.object,
  }),
  env: PropTypes.object.isRequired,

  onChangeMessage: PropTypes.func.isRequired,
  onChangCheckBox: PropTypes.func.isRequired,
  removeCartItem: PropTypes.func.isRequired,
  onAddToCheckout: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default Step1;
