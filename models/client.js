'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    role: DataTypes.BOOLEAN
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
      Client.hasMany(models.Posts);
  };
  return Client;
};