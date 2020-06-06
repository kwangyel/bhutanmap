'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dzo_thromdes', {
      gid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name:{
        type: Sequelize.STRING
      },
      shape_leng: {
        type: Sequelize.NUMERIC
      },
      shape_area: {
        type: Sequelize.NUMERIC
      },
      thromdetyp:{
        type:Sequelize.STRING
      },
      geom: {
        type: Sequelize.GEOMETRY
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dzo_thromdes');
  }
};