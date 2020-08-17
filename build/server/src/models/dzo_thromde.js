'use strict';

module.exports = function (sequelize, DataTypes) {
  var dzo_thromde = sequelize.define('dzo_thromdes', {
    gid: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    shape_leng: DataTypes.NUMERIC,
    shape_area: DataTypes.NUMERIC,
    thromdetyp: DataTypes.STRING,
    geom: DataTypes.GEOMETRY
  }, {
    timestamps: false
  });

  dzo_thromde.associate = function (models) {// associations can be defined here
  };

  return dzo_thromde;
};
//# sourceMappingURL=dzo_thromde.js.map