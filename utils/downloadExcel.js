"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _xlsx = _interopRequireDefault(require("xlsx"));

var downloadExcel = function downloadExcel(translateMessage, data, columns, fileName, isDownloadFile) {
  if (isDownloadFile === void 0) {
    isDownloadFile = true;
  }

  var listFilterColumns = data.map(function (item) {
    var obj = {};
    columns.forEach(function (col) {
      if (col.type === 'bool') {
        obj[col.text] = item[col.apiFieldName] === 1 ? translateMessage({
          id: 'yes'
        }) : translateMessage({
          id: 'no'
        });
      } else if (col.type === 'flag') {
        obj[col.text] = translateMessage({
          id: "country.id." + item[col.apiFieldName]
        });
      } else {
        obj[col.text] = item[col.apiFieldName];
      }
    });
    return obj;
  });

  if (isDownloadFile) {
    var ws = _xlsx["default"].utils.json_to_sheet([].concat(listFilterColumns));

    var wb = _xlsx["default"].utils.book_new();

    _xlsx["default"].utils.book_append_sheet(wb, ws, 'List');

    _xlsx["default"].writeFile(wb, fileName + ".xlsx");
  } else {
    return [].concat(listFilterColumns);
  }
};

var _default = downloadExcel;
exports["default"] = _default;
module.exports = exports.default;