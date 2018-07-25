'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    classroom_id: DataTypes.INTEGER,
    student_name: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsTo(models.Classroom);
    Student.belongsToMany(models.Course, {
      through: 'StudentCourse',
      foreignKey: 'student_id',
      as: 'courses'
    });
  };
  return Student;
};