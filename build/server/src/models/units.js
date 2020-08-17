'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _require = require('sequelize'),
    Model = _require.Model;

module.exports = function (sequelize, DataTypes) {
  var Units =
  /*#__PURE__*/
  function (_Model) {
    (0, _inherits2["default"])(Units, _Model);

    function Units() {
      (0, _classCallCheck2["default"])(this, Units);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Units).apply(this, arguments));
    }

    (0, _createClass2["default"])(Units, null, [{
      key: "associate",

      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      value: function associate(models) {// define association here
      }
    }]);
    return Units;
  }(Model);

  ;
  Units.init({
    ca_number: DataTypes.BIGINT
  }, {
    sequelize: sequelize,
    modelName: 'Units'
  });
  return Units;
};
//# sourceMappingURL=units.js.map