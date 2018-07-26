'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Classrooms', ['class_name'] , {
      type: 'unique',
      name: 'class_name_unique_contrain_on_classrooms'
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Classrooms', 'class_name_unique_contrain_on_classrooms')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
