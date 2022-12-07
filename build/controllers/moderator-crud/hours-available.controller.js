"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listHours = exports.editHours = exports.deleteHours = exports.createHour = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _HoursAvailable = _interopRequireDefault(require("../../models/HoursAvailable"));

var _User = _interopRequireDefault(require("../../models/User"));

var createHour = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, hourStart, hourEnd, doctorId, orgnIn, orgnOn, newHours, createNewHour;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, hourStart = _req$body.hourStart, hourEnd = _req$body.hourEnd, doctorId = _req$body.doctorId;
            _context.next = 4;
            return _User["default"].find({
              _id: req.userId
            });

          case 4:
            orgnIn = _context.sent;
            orgnOn = orgnIn.map(function (org) {
              return org.organization;
            });
            newHours = (0, _HoursAvailable["default"])({
              hourStart: hourStart,
              hourEnd: hourEnd,
              doctorId: doctorId,
              organization: "".concat(orgnOn)
            });
            _context.next = 9;
            return newHours.save();

          case 9:
            createNewHour = _context.sent;

            if (createNewHour) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.json({
              Message: 'No se pudo crear tu hora'
            }));

          case 12:
            return _context.abrupt("return", res.json({
              Message: 'Tu hora ha sido creara exitosamente'
            }));

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.log("Error en guardado de horas (posiblemente sea que el usuario no tiene organizacion definida)");

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function createHour(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createHour = createHour;

var listHours = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user, organization, listHours;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].find({
              _id: req.userId
            });

          case 2:
            user = _context2.sent;
            //Extraer la organizacion del usuario
            organization = user.map(function (org) {
              return org.organization;
            });
            _context2.next = 6;
            return _HoursAvailable["default"].find({
              organization: organization
            });

          case 6:
            listHours = _context2.sent;
            res.json(listHours);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function listHours(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.listHours = listHours;

var editHours = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, hourStart, hourEnd, hourEdit;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, hourStart = _req$body2.hourStart, hourEnd = _req$body2.hourEnd;
            _context3.next = 3;
            return _HoursAvailable["default"].findByIdAndUpdate(req.params.id, {
              hourStart: hourStart,
              hourEnd: hourEnd
            });

          case 3:
            hourEdit = _context3.sent;

            if (hourEdit) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.json({
              Message: 'No se ha podido editar la hora'
            }));

          case 6:
            res.json({
              Message: 'Hora editada satisfactoriamente'
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function editHours(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.editHours = editHours;

var deleteHours = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var hourDelete;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _HoursAvailable["default"].findByIdAndDelete(req.params.id);

          case 2:
            hourDelete = _context4.sent;

            if (hourDelete) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", res.json({
              Message: 'La hora no ha podido ser eliminada'
            }));

          case 5:
            res.json({
              Message: 'Hora eliminada satisfactoriamente'
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteHours(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteHours = deleteHours;