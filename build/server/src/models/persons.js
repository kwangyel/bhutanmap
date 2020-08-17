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
  var Persons =
  /*#__PURE__*/
  function (_Model) {
    (0, _inherits2["default"])(Persons, _Model);

    function Persons() {
      (0, _classCallCheck2["default"])(this, Persons);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Persons).apply(this, arguments));
    }

    (0, _createClass2["default"])(Persons, null, [{
      key: "associate",

      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      value: function associate(models) {// define association here
      }
    }]);
    return Persons;
  }(Model);

  ;
  Persons.init({
    name: DataTypes.STRING,
    cid: DataTypes.BIGINT,
    phone: DataTypes.BIGINT,
    relation: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'Persons'
  });
  return Persons;
};
//# sourceMappingURL=persons.js.map