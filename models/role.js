'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    nomination: DataTypes.TEXT
  }, {});
  role.associate = function(models) {
    role.belongsTo(models.purpose, {foreignKey: 'id'});
  };
  return role;
};
