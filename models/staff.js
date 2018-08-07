'use strict';
module.exports = (sequelize, DataTypes) => {
  var staff = sequelize.define('staff', {
    staff_id:{
          type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'staff_id'},
    staff_Name: DataTypes.STRING,
    staff_email: DataTypes.STRING,
    staff_address: DataTypes.STRING
  }, {});
  staff.associate = function(models) {
    // associations can be defined here
  };
  return staff;
};
