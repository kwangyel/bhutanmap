"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _mapRoutes = _interopRequireDefault(require("./server/routes/mapRoutes"));

//const express=require('express');
//const bodyparser=require('body-parser');
_dotenv["default"].config();

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 8080;
app.get('/', function (req, res) {
  res.status(200).send({
    message: 'welcome to the Bhutan Plans API.'
  });
});
app.use('/map', _mapRoutes["default"]);
app.listen(port, function () {
  console.log("server listening on port ".concat(port));
}); //module.exports=app;

var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map