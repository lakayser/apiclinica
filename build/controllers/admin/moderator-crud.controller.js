"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addModerator = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../../models/User"));

var _Role = _interopRequireDefault(require("../../models/Role"));

var addModerator = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nameUser, organization, ocupation, roles, user, foundRoles, role;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nameUser = _req$body.nameUser, organization = _req$body.organization, ocupation = _req$body.ocupation, roles = _req$body.roles;
            user = new _User["default"]({
              nameUser: nameUser,
              organization: organization,
              ocupation: ocupation,
              roles: roles
            });

            if (!roles) {
              _context.next = 9;
              break;
            }

            _context.next = 5;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 5:
            foundRoles = _context.sent;
            user.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 13;
            break;

          case 9:
            _context.next = 11;
            return _Role["default"].findOne({
              name: "moderator"
            });

          case 11:
            role = _context.sent;
            user.roles = [role._id];

          case 13:
            res.json(user);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addModerator(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addModerator = addModerator;