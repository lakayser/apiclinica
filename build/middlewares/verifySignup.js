"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRolesExisted = exports.checkDuplicateName = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = require("../models/Role");

var _User = _interopRequireDefault(require("../models/User"));

var checkRolesExisted = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var i;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.body.roles) {
              _context.next = 8;
              break;
            }

            i = 0;

          case 2:
            if (!(i < req.body.roles.length)) {
              _context.next = 8;
              break;
            }

            if (_Role.ROLES.includes(req.body.roles[i])) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "El rol ".concat(req.body.roles[i], " no existe")
            }));

          case 5:
            i++;
            _context.next = 2;
            break;

          case 8:
            next();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkRolesExisted(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkRolesExisted = checkRolesExisted;

var checkDuplicateName = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              nameUser: req.body.nameUser
            });

          case 2:
            user = _context2.sent;

            if (!user) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: 'El usuario ingresado ya existe'
            }));

          case 5:
            /**
             * @REPETIR En caso de que se necesiten mas campos (Ej: email)
             */
            // const user = await User.findOne({username: req.body.username})
            // if (condition) return res.status(400).json({message: 'El usuario ingresado ya existe'});
            next();

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function checkDuplicateName(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.checkDuplicateName = checkDuplicateName;