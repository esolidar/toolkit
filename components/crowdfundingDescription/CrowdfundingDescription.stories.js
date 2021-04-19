"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CrowdfundingDescription = _interopRequireDefault(require("./CrowdfundingDescription"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Crowdfundings/CrowdfundingDescription',
  component: _CrowdfundingDescription["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CrowdfundingDescription["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  campaign: {
    description: 'Se desejar a campanha de crowdfunding pode aparecer também no site da comunidade eSolidar.com, para tal basta colocar "Sim" no campo "Aparecer na eSolidar.com".\nCaso ative esta funcionalidade, a campanha ficará pendente para aprovação da equipa da eSolidar. Assim que a campanha seja aprovada irá receber uma notificação/email.',
    description_en: 'Se desejar a campanha de crowdfunding pode aparecer também no site da comunidade eSolidar.com, para tal basta colocar "Sim" no campo "Aparecer na eSolidar.com". Caso ative esta funcionalidade, a campanha ficará pendente para aprovação da equipa da eSolidar. Assim que a campanha seja aprovada irá receber uma notificação/email.',
    reward: 1,
    reward_description: 'Se desejar a campanha de crowdfunding pode aparecer também no site da comunidade eSolidar.com, para tal basta colocar "Sim" no campo "Aparecer na eSolidar.com".\nCaso ative esta funcionalidade, a campanha ficará pendente para aprovação da equipa da eSolidar. Assim que a campanha seja aprovada irá receber uma notificação/email.',
    projects: [{
      ods: [{
        created_at: '2020-02-05 18:03:49',
        id: 2,
        laravel_through_key: 46,
        name: '2-ods-2',
        ods_id: 2,
        status: true,
        tag_name: 'ods-2',
        updated_at: '2020-02-05 18:03:49'
      }, {
        created_at: '2020-02-05 18:03:49',
        id: 8,
        laravel_through_key: 46,
        name: '8-ods-8',
        ods_id: 8,
        status: true,
        tag_name: 'ods-8',
        updated_at: '2020-02-05 18:03:49'
      }]
    }]
  },
  lang: 'pt',
  env: {
    cdn_static_url: 'https://static.esolidar.com'
  }
};