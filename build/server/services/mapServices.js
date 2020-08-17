"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../src/models"));

var mapServices =
/*#__PURE__*/
function () {
  function mapServices() {
    (0, _classCallCheck2["default"])(this, mapServices);
  }

  (0, _createClass2["default"])(mapServices, null, [{
    key: "getAlldzoThrom",
    value: function () {
      var _getAlldzoThrom = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].sequelize.query('select ST_AsGeoJSON(geom),name,thromdetyp,shape_area from dzo_thromdes;');

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result[0]);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getAlldzoThrom() {
        return _getAlldzoThrom.apply(this, arguments);
      }

      return getAlldzoThrom;
    }()
  }, {
    key: "getBuilding",
    value: function () {
      var _getBuilding = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(dzo) {
        var result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].sequelize.query("select ST_AsGeoJSON(geom),osm_id from buildings_rectified where dzongkhag = '" + dzo + "';");

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result[0]);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getBuilding(_x) {
        return _getBuilding.apply(this, arguments);
      }

      return getBuilding;
    }()
  }]);
  return mapServices;
}();

var _default = mapServices;
exports["default"] = _default;
//# sourceMappingURL=mapServices.js.map