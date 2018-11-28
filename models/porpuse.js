'use strict';
module.exports = (sequelize, DataTypes) => {
  const porpuse = sequelize.define('porpuse', {
    nominationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  porpuse.associate = function(models) {
    // associations can be defined here
  };
  return porpuse;
};