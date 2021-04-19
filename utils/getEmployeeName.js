"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var getEmployeeName = function getEmployeeName(companyId, user) {
  if (user && user.work_email) {
    var workEmails = user.work_email;

    if (companyId && workEmails.length > 0) {
      var workEmail = workEmails.find(function (employee) {
        return employee.company_id === companyId;
      });
      return workEmail && workEmail.name ? workEmail.name : user.firstName + " " + user.lastName;
    }

    return user.firstName + " " + user.lastName;
  }

  return '--';
};

var _default = getEmployeeName;
exports["default"] = _default;
module.exports = exports.default;