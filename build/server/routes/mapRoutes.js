"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mapController = _interopRequireDefault(require("../controllers/mapController"));

// import cache from '../utils/cache';
var router = (0, _express.Router)(); //get boundary of all dzongkhag thromdes

router.get('/throms', _mapController["default"].getAlldzoThrom);
router.get('/buildings/:dzo', _mapController["default"].getBuilding);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=mapRoutes.js.map