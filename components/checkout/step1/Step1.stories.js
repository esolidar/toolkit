"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Step = _interopRequireDefault(require("./Step1"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Checkout/Step1',
  component: _Step["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  state: {
    order: {
      products: [{
        currency: {
          id: 1,
          name: 'Euro',
          small: 'EUR',
          value: '1.087',
          symbol: '€'
        },
        id: 42,
        campaign: {
          id: 38,
          user_id: null,
          institution_id: null,
          company_id: 1,
          sub_category_id: 91,
          product_id: 42,
          title: 'Phasellus rhoncus, justo vitae consectetur ultrices, nisi lorem gravida justo',
          title_en: null,
          tags: null,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id velit sit amet nisi fringilla fringilla sed convallis tortor. Maecenas commodo vestibulum ligula ut facilisis.',
          description_en: null,
          video: 'null',
          reward: 0,
          reward_description: null,
          goal: 70000,
          minimum_contribution: 10,
          currency_id: 1,
          start_date: '2020-04-15 12:00:00',
          end_date: '2020-06-30 12:00:00',
          timezone: 'UTC',
          position: 0,
          recipient_visible: 1,
          status: 'approved',
          esolidar_list: 0,
          contributes_count: 0,
          contributes_sum: 0,
          product: {
            id: 42,
            payment_method_id: 11,
            type: 'crowdfunding',
            updated_at: '2020-04-23 15:37:18',
            created_at: '2020-04-15 09:48:10',
            payment_method: {
              id: 11,
              paypal: 1,
              stripe: 1,
              sibs_checkout: 0,
              sibs_mbway: 0,
              sibs_multibanco: 0,
              sibs_directdebit_sepa: 0,
              sibs_cc: 0,
              utrust: 0
            }
          },
          institution: null,
          images: [{
            id: 23,
            crowdfunding_id: 38,
            image: 'crowdfundings/707314d0-4db8-45ac-91df-5cacfc548428.jpeg'
          }],
          currency: {
            id: 1,
            name: 'Euro',
            small: 'EUR',
            value: '1.087',
            symbol: '€',
            status: true
          }
        },
        type: 'crowdfunding',
        amount: 10,
        quantity: 1,
        extra: {
          hidden: 0,
          message: '',
          checked: 1
        }
      }]
    }
  },
  onChangCheckBox: function onChangCheckBox() {},
  onAddToCheckout: function onAddToCheckout() {},
  onChangeMessage: function onChangeMessage() {},
  removeCartItem: function removeCartItem() {},
  nextStep: function nextStep() {},
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com'
  }
};