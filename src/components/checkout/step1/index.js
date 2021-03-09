import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Button from '../../../elements/button';
import CrowdfundingItem from '../products/CrowdfundingItem';

const Step1 = props => {
  const {
    env,
    translateMessage,
    state,
    nextStep,
    onChangeMessage,
    onChangCheckBox,
    removeCartItem,
    onAddToCheckout,
  } = props;
  const cartItems = state.order.products;

  // if (cartItems.length === 0) return <div />;

  const renderCartItems = () => {
    if (cartItems.length > 0) {
      return cartItems.map((item, indx) => {
        if (item.type === 'crowdfunding') {
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
                  translateMessage={translateMessage}
                />
              </div>
            </div>
          );
        }
      });
    }
    return (
      <div className="no-items">
        <h1>
          {translateMessage({
            id: 'checkout.noitems',
            defaultMessage: 'There are no items to checkout',
          })}
        </h1>
      </div>
    );
  };

  return (
    <div className="checkout">
      {renderCartItems()}
      {cartItems.length > 0 && (
        <Row>
          <Col sm={12} className="text-right">
            <div className="box">
              <Button
                extraClass="success-full next-step"
                onClick={() => nextStep(1)}
                text={translateMessage({
                  id: 'crowdfunding.donation.checkout.next',
                  defaultMessage: 'Next',
                })}
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
                {translateMessage({
                  id: 'crowdfunding.donation.checkout.goHome',
                  defaultMessage: 'Go home',
                })}
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
  translateMessage: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onChangCheckBox: PropTypes.func.isRequired,
  removeCartItem: PropTypes.func.isRequired,
  onAddToCheckout: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default Step1;
