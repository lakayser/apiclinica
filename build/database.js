"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

_mongoose["default"].connect("mongodb+srv://boliot:boliot@proyectos.b9x7o.mongodb.net/botmila?retryWrites=true&w=majority", {}).then(function (db) {
  return console.log('Db is connected');
})["catch"](function (err) {
  return console.log(err);
});