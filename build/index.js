"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

// var PORT = process.env.PORT || 8000;
_app["default"].set('port', process.env.PORT || 8080); // app.listen(PORT);
// console.log('Server on port ', PORT);


_app["default"].listen(_app["default"].get('port'), function () {
  console.log('Servidor corriendo en puerto ', _app["default"].get('port'), ' :)');
});