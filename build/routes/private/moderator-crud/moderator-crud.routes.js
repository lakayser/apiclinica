"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var userCtrl = _interopRequireWildcard(require("../../../controllers/moderator-crud/users-crud.controller"));

var hoursAvailableCtrl = _interopRequireWildcard(require("../../../controllers/moderator-crud/hours-available.controller"));

var scheduleHoursCtrl = _interopRequireWildcard(require("../../../controllers/moderator-crud/schedule-hours.controller"));

var _middlewares = require("../../../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();

/**
 * @authIsModerator siempre ponerlos en orden correcto, sino no funcionara
 */
//  CRUD users
router.post('/register-users', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator, _middlewares.verifySignup.checkRolesExisted, _middlewares.verifySignup.checkDuplicateName], userCtrl.register);
router.get('/list-users', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], userCtrl.userLists);
router.put('/edit-user/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], userCtrl.userEdit);
router["delete"]('/delete-user/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], userCtrl.userDelete); //  CRUD Crear Horas Disponibles

router.post('/create-hours', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], hoursAvailableCtrl.createHour);
router.get('/list-hours', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], hoursAvailableCtrl.listHours);
router.put('/edit-hours/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], hoursAvailableCtrl.editHours);
router["delete"]('/delete-hours/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], hoursAvailableCtrl.deleteHours); // router.get('/prueba', [authJwt.verifyToken, authJwt.isModerator], userCtrl.userLists);
//, [authJwt.verifyToken, authJwt.isModerator, verifySignup.checkRolesExisted]
//  CRUD Gestion Horas Agendadas (VEREMOS)

router.get('/view-hours-schedule', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], scheduleHoursCtrl.viewHours);
router.get('/edit-hours-schedule/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], scheduleHoursCtrl.editHours);
var _default = router;
exports["default"] = _default;