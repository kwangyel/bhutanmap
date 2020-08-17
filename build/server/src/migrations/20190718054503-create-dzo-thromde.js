'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('dzo_thromdes', {
      gid: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      shape_leng: {
        type: Sequelize.NUMERIC
      },
      shape_area: {
        type: Sequelize.NUMERIC
      },
      thromdetyp: {
        type: Sequelize.STRING
      },
      geom: {
        type: Sequelize.GEOMETRY
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('dzo_thromdes');
  }
};
//# sourceMappingURL=20190718054503-create-dzo-thromde.js.map