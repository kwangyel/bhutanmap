'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Persons.init({
    name: DataTypes.STRING,
    cid: DataTypes.BIGINT,
    phone: DataTypes.BIGINT,
    relation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persons',
  });
  return Persons;
};