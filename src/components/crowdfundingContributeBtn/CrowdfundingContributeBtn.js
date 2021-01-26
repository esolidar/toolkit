import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import ReactGA from 'react-ga';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'react-bootstrap';
import Button from '../../elements/button/Button';
import TextField from '../../elements/textField/TextField';

class CrowdfundingContributeBtn extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      errors: {},
      countDownStatus: null,
      todaysDate: new Date(),
      isLoadingButton: false,
    };
    this.checkoutContribution = this.checkoutContribution.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onChangCheckBox = this.onChangCheckBox.bind(this);
  }

  componentDidMount = () => {
    const { campaign } = this.props;

    localStorage.setItem('order_currency', campaign.currency.small);

    // Check if campaign is soon, running, ended
    const inputStartDate = new Date(moment.utc(campaign.start_date).tz(moment.tz.guess()).format('YYYY/MM/DD HH:mm:ss'));
    const inputEndDate = new Date(moment.utc(campaign.end_date).tz(moment.tz.guess()).format('YYYY/MM/DD HH:mm:ss'));

    // Get today's date
    const { todaysDate } = this.state;

    // call setHours to take the time out of the comparison
    if (inputStartDate > todaysDate) {
      this.setState({
        countDownStatus: 'soon',
      });
    } else if (todaysDate <= inputEndDate) {
      this.setState({
        countDownStatus: 'running',
      });
    } else {
      this.setState({
        countDownStatus: 'ended',
      });
    }
  }

  componentWillUnmount = () => {
    localStorage.removeItem('order_currency');
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onChangCheckBox = (e) => {
    if (e.target.checked === true) {
      this.setState({ [e.target.name]: '1' });
    } else {
      this.setState({ [e.target.name]: '0' });
    }
  }

  checkoutContribution = () => {
    const { value } = this.state;
    const { campaign, errorMsgRequired, errorMsgAmount } = this.props;

    if (!value) {
      this.setState({
        errors: {
          value: errorMsgRequired,
        },
      });
      ReactGA.event({
        category: 'button',
        action: 'click',
        label: 'btn-contribute-empty',
      });
    } else if (Number(value) < campaign.minimum_contribution) {
      this.setState({
        errors: {
          value: errorMsgAmount + campaign.currency.symbol + campaign.minimum_contribution,
        },
      });
      ReactGA.event({
        category: 'button',
        action: 'click',
        label: 'btn-contribute-minimum',
      });
    } else {
      const cart = localStorage.order ? JSON.parse(localStorage.order) : null;
      const order = {
        products: [
          {
            currency: campaign.currency,
            id: campaign.product_id,
            campaign,
            type: 'crowdfunding',
            amount: Number(value),
            quantity: 1,
            extra: {
              hidden: 0,
              message: '',
              checked: 1,
            },
          },
        ],
      };
      if (cart) {
        if (cart.products.length === 0) {
          cart.products.push({
            currency: campaign.currency,
            id: campaign.product_id,
            campaign,
            type: 'crowdfunding',
            amount: Number(value),
            quantity: 1,
            extra: {
              hidden: 0,
              message: '',
              checked: 1,
            },
          });
          localStorage.setItem('order', JSON.stringify(cart));
        } else {
          cart.products = [{
            currency: campaign.currency,
            id: campaign.product_id,
            campaign,
            type: 'crowdfunding',
            amount: Number(value),
            quantity: 1,
            extra: {
              hidden: 0,
              message: '',
              checked: 1,
            },
          }];
          localStorage.setItem('order', JSON.stringify(cart));
        }
      } else {
        localStorage.setItem('order', JSON.stringify(order));
      }
      this.updateState({ isLoadingButton: true });
      ReactGA.event({
        category: 'button',
        action: 'click',
        label: 'btn-contribute-checkout',
      });
      window.location.href = '/checkout';
    }
  }

  updateState = (state) => {
    this.setState(state);
  }

  render() {
    const { campaign, textBtnDonate } = this.props;
    const {
      isLoadingButton, errors, value, countDownStatus,
    } = this.state;

    return (
      <>
        <Row className="mt-3">
          <Col sm={12}>
            <span className="control-label">
              <FormattedMessage
                id="crowdfunding.new.donation"
                defaultMessage="NEW DONATION (Min. {value})"
                values={{ value: `${campaign.currency.symbol}${campaign.minimum_contribution}` }}
              />
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span className="control-label-note">
              <FormattedMessage
                id="crowdfunding.new.donation.note"
                defaultMessage="Use only integer numbers"
              />
            </span>
          </Col>
        </Row>
        <Row className="mt-1">
          {(campaign.status === 'approved' || campaign.status === 'completed') && (
            <Col sm={7}>
              <TextField
                type="number"
                id="inputDonation"
                onChange={(e) => {
                  this.setState({
                    value: e.target.value,
                    errors: {},
                  });
                  ReactGA.event({
                    category: 'button',
                    action: 'click',
                    label: 'change-contribute-value',
                  });
                }}
                onBlur={(e) => {
                  this.setState({
                    value: `${Math.trunc(e.target.value)}.00`,
                    errors: {},
                  });
                }}
                value={value}
                disabled={countDownStatus !== 'running'}
                placeholder={`${campaign.currency.symbol} 0,00`}
              />
              {(value === '' || value < campaign.minimum_contribution) ? (
                <div className="has-error">
                  <span className="help-block">
                    {errors.value}
                  </span>
                </div>
              ) : ''}
            </Col>
          )}
          {(campaign.status === 'approved' || campaign.status === 'completed') && (
            <Col sm={5}>
              <Button
                className="w-100"
                extraClass="success-full btn btn-submit"
                onClick={this.checkoutContribution}
                disabled={((countDownStatus !== 'running') || isLoadingButton)}
                text={textBtnDonate}
              />
            </Col>
          )}
        </Row>
      </>
    );
  }
}

CrowdfundingContributeBtn.propTypes = {
  campaign: PropTypes.shape({
    status: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    product_id: PropTypes.number,
    minimum_contribution: PropTypes.number,
    product: PropTypes.shape({
      payment_method: PropTypes.shape({
        id: PropTypes.number,
        paypal: PropTypes.number,
        sibs_cc: PropTypes.number,
        sibs_directdebit_sepa: PropTypes.number,
        sibs_mbway: PropTypes.number,
        sibs_multibanco: PropTypes.number,
        stripe: PropTypes.number,
      }),
    }),
    currency: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      small: PropTypes.string,
      status: PropTypes.bool,
      symbol: PropTypes.string,
      value: PropTypes.string,
    }),
  }),
  errorMsgRequired: PropTypes.string,
  errorMsgAmount: PropTypes.string,
  textBtnDonate: PropTypes.string.isRequired,
};

export default CrowdfundingContributeBtn;
