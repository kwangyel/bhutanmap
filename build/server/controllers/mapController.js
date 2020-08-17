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

var _mapServices = _interopRequireDefault(require("../services/mapServices"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var mapController =
/*#__PURE__*/
function () {
  function mapController() {
    (0, _classCallCheck2["default"])(this, mapController);
  }

  (0, _createClass2["default"])(mapController, null, [{
    key: "getAlldzoThrom",
    value: function () {
      var _getAlldzoThrom = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var dzoThromdes, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _mapServices["default"].getAlldzoThrom();

              case 3:
                dzoThromdes = _context.sent;

                if (dzoThromdes.length > 0) {
                  result = dzoThromdes.map(function (row) {
                    var geojson = JSON.parse(row.st_asgeojson);
                    geojson.properties = {
                      name: row.name,
                      thromdetype: row.thromdetyp,
                      area: row.shape_area
                    };
                    return geojson;
                  });
                  util.setSuccess(200, 'Thromdes Retrieved', result);
                } else {
                  util.setSuccess(200, 'No Thromdes found');
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getAlldzoThrom(_x, _x2) {
        return _getAlldzoThrom.apply(this, arguments);
      }

      return getAlldzoThrom;
    }()
  }, {
    key: "getBuilding",
    value: function () {
      var _getBuilding = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var dzo, buildings, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dzo = req.params.dzo;
                _context2.prev = 1;
                _context2.next = 4;
                return _mapServices["default"].getBuilding(dzo);

              case 4:
                buildings = _context2.sent;

                if (buildings.length > 0) {
                  result = buildings.map(function (row) {
                    var geojson = JSON.parse(row.st_asgeojson);
                    geojson.properties = {
                      id: row.osm_id,
                      name: row.name
                    };
                    return geojson;
                  });
                  util.setSuccess(200, 'Buildings Retrieved', result);
                } else {
                  util.setSuccess(200, 'No buildings found');
                }

                return _context2.abrupt("return", util.send(res));

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);
                util.setError(400, _context2.t0);
                return _context2.abrupt("return", util.send(res));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }));

      function getBuilding(_x3, _x4) {
        return _getBuilding.apply(this, arguments);
      }

      return getBuilding;
    }()
  }]);
  return mapController;
}();

var _default = mapController;
exports["default"] = _default;
//# sourceMappingURL=mapController.js.map