'use strict';
module.exports = (sequelize, DataTypes) => {
  const porpuse = sequelize.define('purpose', {
    nominationId: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {});
  porpuse.associate = function(models) {
    porpuse.belongsTo(models.user, {foreignKey: 'userID'});
    porpuse.hasOne(models.role, {foreignKey: 'id', targetKey: 'nominationId'});
  };
  return porpuse;
};
