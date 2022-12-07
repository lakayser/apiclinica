"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLists = exports.userEdit = exports.userDelete = exports.register = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../../config"));

var _Role = _interopRequireDefault(require("../../models/Role"));

var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nameUser, password, roles, organization, ocupation, newUser, foundRoles, role, savedUser, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nameUser = _req$body.nameUser, password = _req$body.password, roles = _req$body.roles, organization = _req$body.organization, ocupation = _req$body.ocupation; // const userFound = User.find({nameUser})

            _context.t0 = _User["default"];
            _context.t1 = nameUser;
            _context.next = 5;
            return _User["default"].encryptPassword(password);

          case 5:
            _context.t2 = _context.sent;
            _context.t3 = organization;
            _context.t4 = ocupation;
            _context.t5 = {
              nameUser: _context.t1,
              password: _context.t2,
              organization: _context.t3,
              ocupation: _context.t4
            };
            newUser = (0, _context.t0)(_context.t5);

            if (!roles) {
              _context.next = 17;
              break;
            }

            _context.next = 13;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 13:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 21;
            break;

          case 17:
            _context.next = 19;
            return _Role["default"].findOne({
              name: "user"
            });

          case 19:
            role = _context.sent;
            newUser.roles = [role._id];

          case 21:
            res.json(newUser);
            _context.next = 24;
            return newUser.save();

          case 24:
            savedUser = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            res.status(200).json({
              token: token
            });

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.register = register;

var userLists = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var dataUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].find({
              /*organization: ogtn, roles: [idRol]*/
            });

          case 2:
            dataUser = _context2.sent;
            res.json(dataUser); // const dataUser = await User.find({})
            // res.json(dataUser)

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function userLists(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.userLists = userLists;

var userEdit = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, nameUser, organization, ocupation, editUser;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, nameUser = _req$body2.nameUser, organization = _req$body2.organization, ocupation = _req$body2.ocupation; // User.findByIdAndUpdate(req.params.id, {nameUser}, function (error, result) {
            //     if (result) return res.json({Message: 'Editado con exito', result})
            //     res.json({Message: 'Algo paso', error})
            // });

            _context3.next = 3;
            return _User["default"].findByIdAndUpdate(req.params.id, {
              nameUser: nameUser,
              organization: organization,
              ocupation: ocupation
            });

          case 3:
            editUser = _context3.sent;

            if (editUser) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.json({
              Message: 'Algo exploto'
            }));

          case 6:
            return _context3.abrupt("return", res.status(200).json({
              Message: 'Exito'
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function userEdit(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.userEdit = userEdit;

var userDelete = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var deleteUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _User["default"].findByIdAndDelete(req.params.id);

          case 2:
            deleteUser = _context4.sent;

            if (deleteUser) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", res.json({
              Message: 'No se encontro el id'
            }));

          case 5:
            return _context4.abrupt("return", res.json({
              Message: 'Usuario eliminado satisfactoriamente'
            }));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function userDelete(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.userDelete = userDelete;