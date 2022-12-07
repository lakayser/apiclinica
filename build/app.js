"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _initialSetup = require("./libs/initialSetup");

var _user = _interopRequireDefault(require("./routes/private/user.routes"));

var _auth = _interopRequireDefault(require("./routes/authentication/auth.routes"));

var _moderatorCrud = _interopRequireDefault(require("./routes/private/moderator-crud/moderator-crud.routes"));

var _adminCrud = _interopRequireDefault(require("./routes/private/admin/admin-crud.routes"));

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    Message: "Hola"
  });
});
app.use('/botmilaAPI/auth', _auth["default"]);
app.use('/botmilaAPI', _user["default"]);
app.use('/botmilaAPI/moderator', _moderatorCrud["default"]);
app.use('/botmilaAPI/admin', _adminCrud["default"]);
var _default = app;
exports["default"] = _default;