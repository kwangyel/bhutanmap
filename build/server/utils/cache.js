"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var Redis = require('ioredis');

var redis = new Redis(process.env.REDIS_PORT, process.env.REDIS_HOST);
var util = new _Utils["default"]();
module.exports = {
  /** Koa middleware function to check cache before continuing to any endpoint handlers */
  checkResponseCache: function () {
    var _checkResponseCache = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res, next) {
      var cachedResponse;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('checkResponseCache');
              _context.next = 3;
              return redis.get(req.originalUrl);

            case 3:
              cachedResponse = _context.sent;

              if (cachedResponse) {
                util.setSuccess(200, 'Pests Retrieved from cache', JSON.parse(cachedResponse));
                util.send(res);
              } else {
                next();
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function checkResponseCache(_x, _x2, _x3) {
      return _checkResponseCache.apply(this, arguments);
    }

    return checkResponseCache;
  }(),

  /** Koa middleware function to insert response into cache */
  addResponseToCache: function () {
    var _addResponseToCache = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res, next) {
      var tocache;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!req.data) {
                _context2.next = 4;
                break;
              }

              tocache = req.data;
              _context2.next = 4;
              return redis.set(req.originalUrl, JSON.stringify(req.data));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function addResponseToCache(_x4, _x5, _x6) {
      return _addResponseToCache.apply(this, arguments);
    }

    return addResponseToCache;
  }()
};
//# sourceMappingURL=cache.js.map