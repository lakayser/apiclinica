"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewHours = exports.editHours = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _HoursAvailable = _interopRequireDefault(require("../../models/HoursAvailable"));

var _User = _interopRequireDefault(require("../../models/User"));

var viewHours = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var getUserId, getOrganization, getHoursByOc;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].find({
              _id: req.userId
            });

          case 2:
            getUserId = _context.sent;
            getOrganization = getUserId.map(function (org) {
              return org.organization;
            });
            _context.next = 6;
            return _HoursAvailable["default"].find({
              organization: getOrganization
            });

          case 6:
            getHoursByOc = _context.sent;
            res.json(getHoursByOc);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function viewHours(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.viewHours = viewHours;

var editHours = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _objectDestructuringEmpty2["default"])(req.body);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function editHours(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.editHours = editHours;