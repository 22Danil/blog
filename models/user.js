'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    sault: DataTypes.TEXT
  }, {});
  user.associate = function(models) {
      user.hasMany(models.post, {foreignKey: 'userID', targetKey: 'id'});
      user.hasMany(models.purpose, {foreignKey: 'userID', targetKey: 'id'});
  };
  return user;
};
