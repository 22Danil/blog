'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    nomination: DataTypes.STRING
  }, {});
  role.associate = function(models) {
    // associations can be defined here
      role.hasMany(models.purpose);
  };
  return role;
};