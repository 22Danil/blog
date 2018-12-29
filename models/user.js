'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    sault: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // TODO выпилить коментраии с кода
    // associations can be defined here
      //user.hasMany(models.post);
      //user.hasMany(models.post, {foreignKey: 'id', sourceKey: 'firstName'});
      //user.belongsTo(models.purpose, {foreignKey: 'id', sourceKey: 'id_user'});
      //user.belongsTo(models.purpose);
  };
  return user;
};
