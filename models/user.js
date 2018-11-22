'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    sault: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
      user.hasMany(models.post);
  };
  return user;
};