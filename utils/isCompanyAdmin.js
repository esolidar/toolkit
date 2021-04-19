"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var isCompanyAdmin = function isCompanyAdmin(companyId, user) {
  var _user$work_email;

  var isAdmin = (_user$work_email = user.work_email) === null || _user$work_email === void 0 ? void 0 : _user$work_email.findIndex(function (o) {
    return o.company_id === companyId && (o.role === 'admin' || o.role === 'owner');
  });
  return isAdmin >= 0;
};

var _default = isCompanyAdmin;
exports["default"] = _default;
module.exports = exports.default;