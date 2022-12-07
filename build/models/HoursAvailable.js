"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var hoursAvailableSchema = new _mongoose.Schema({
  hourStart: Date,
  hourEnd: Date,
  organization: String,
  doctorId: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('HoursAvailable', hoursAvailableSchema);

exports["default"] = _default;