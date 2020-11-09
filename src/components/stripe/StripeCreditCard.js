import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';
import { NotificationManager } from 'react-notifications';
import { Elements, StripeProvider } from 'react-stripe-elements';
import StripeCheckoutFormSca from './StripeCheckoutFormSca';

class StripeCreditCard extends Component {
  state = {
    errors: {},
  };

  componentDidUpdate(prevProps) {
    const {
      updateState, order,
    } = this.props;
    const { stripe } = this.state;

    if (prevProps.order !== order) {
      if (order.code === 200) {
        if (order.data.method === 'stripe') {
          // eslint-disable-next-line camelcase
          const { client_secret, status } = order.data.response;

          if (status !== 'succeeded') {
            (async () => {
              const { paymentIntent, error } = await stripe.handleCardAction(client_secret);

              if (error) {
                NotificationManager.error(error.message, '', 15000);
                updateState({
                  isLoadingPayment: false,
                });
              } else if (paymentIntent && paymentIntent.status !== 'succeeded') {
                const { currencyId } = this.props;
                const data = {
                  method: 'stripe',
                  action: 'confirm',
                  currency_id: currencyId,
                  payment_id: order.data.response.merchantTransactionId,
                  method_info: {
                    payment_intent_id: paymentIntent.id,
                    payment_method_id: paymentIntent.payment_method,
                  },
                  products: JSON.parse(localStorage.order).products,
                };
                updateState({
                  isLoadingPayment: true,
                });
                this.submitStripePayment(data);
              } else {
                const url = new URL(window.location.href);
                url.searchParams.set('checkout_step', 4);
                window.history.pushState({ path: url.href }, '', url.href);
                updateState({
                  currentStep: 4,
                  isLoadingPayment: false,
                  checkoutId: JSON.parse(localStorage.order).products[0].id,
                  merchantTransactionId: order.data.response.merchantTransactionId,
                });
              }
            })();
          } else {
            const orderCart = localStorage.order ? JSON.parse(localStorage.order) : { products: [] };
            const ordersRemaining = [];
            const ordersPayed = [];

            orderCart.products.map((campaign) => {
              if (!campaign.extra.checked) {
                ordersRemaining.push(campaign);
              } else {
                ordersPayed.push(campaign);
              }
            });
            localStorage.setItem('products', `{ "products": ${JSON.stringify(ordersPayed)}}`);
            localStorage.setItem('order', `{ "products": ${JSON.stringify(ordersRemaining)}}`);

            const { merchantTransactionId } = order.data.response;
            const url = new URL(window.location.href);
            url.searchParams.set('checkout_step', 4);
            window.history.pushState({ path: url.href }, '', url.href);
            updateState({
              currentStep: 4,
              isLoadingPayment: false,
              checkoutId: order.data.response.id,
              merchantTransactionId,
            });
          }
        }
      }
    }
  }

  handleChange = ({ error }) => {
    const { errors } = this.state;

    if (error) {
      errors[error.code] = error.message;
      this.setState({ errors });
    } else {
      this.setState({ errors: {} });
    }
  };

  submit = (stripe, elements) => {
    const {
      updateState,
    } = this.props;

    this.updateState({ errors: {}, stripe });
    (async () => {
      if (stripe) {
        const cardElement = elements.getElement('cardNumber');
        const { paymentMethod, error } = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
          billing_details: {
            name: `${JSON.parse(localStorage.user).firstName} ${JSON.parse(localStorage.user).lastName}`,
            email: JSON.parse(localStorage.user).email,
          },
        });

        if (paymentMethod) {
          updateState({
            isLoadingPayment: true,
          });
          this.submitStripePayment(paymentMethod);
        } else if (error) {
          NotificationManager.error(error.message, '', 15000);
        }
      }
    })();
  }

  submitStripePayment = (data) => {
    const {
      state, postOrder, updateState,
    } = this.props;

    const firstChecked = findIndex(state.order.products, (o) => o.extra.checked === 1);
    const cartCurrency = firstChecked >= 0 ? state.order.products[firstChecked].currency.id : state.order.products[0].currency.id;

    if (data) {
      this.updateState({ isLoadingPayment: true });
      updateState({ isLoadingPayment: true });
      if (data.action === 'confirm') {
        postOrder(data);
      } else {
        const stripeOrderPayment = {
          method: 'stripe',
          action: 'create',
          currency_id: cartCurrency,
          method_info: {
            id: data.id,
            card: data.card,
            livemode: data.livemode,
            object: data.object,
          },
          products: [],
          receipt: state.receipt,
          invoice: {
            nif: state.nif,
            invoice_address: state.invoice_address,
          },
        };

        state.order.products.map((campaign) => {
          if (campaign.extra.checked) {
            stripeOrderPayment.products.push(campaign);
          }
        });
        postOrder(stripeOrderPayment);
      }
    }
  }

  updateState = (state) => {
    this.setState(state);
  }

  render() {
    const { currencyId, env } = this.props;
    const stripeKey = currencyId === 17 ? env.stripe.publishableKeyBr : env.stripe.publishableKey;
    const { errors } = this.state;

    return (
      <StripeProvider apiKey={stripeKey}>
        <div className="stripe-credit-card-checkout">
          <Elements>
            <StripeCheckoutFormSca
              handleChange={this.handleChange}
              submit={this.submit}
              errors={errors}

            />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default StripeCreditCard;

StripeCreditCard.propTypes = {
  currencyId: PropTypes.number,
  env: PropTypes.shape({
    stripe: PropTypes.shape({
      publishableKey: PropTypes.any,
      publishableKeyBr: PropTypes.any,
    }),
  }),
  order: PropTypes.shape({
    code: PropTypes.number,
    data: PropTypes.shape({
      method: PropTypes.string,
      response: PropTypes.shape({
        client_secret: PropTypes.any,
        id: PropTypes.any,
        merchantTransactionId: PropTypes.any,
        status: PropTypes.string,
      }),
    }),
  }),
  postOrder: PropTypes.func,
  state: PropTypes.shape({
    invoice_address: PropTypes.any,
    nif: PropTypes.any,
    order: PropTypes.shape({
      products: PropTypes.array,
    }),
    receipt: PropTypes.any,
  }),
  updateState: PropTypes.func,
};
