'use strict';
module.exports = (sequelize, DataTypes) => {
  const purpose = sequelize.define('purpose', {
    id_nomination: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {});
  purpose.associate = function(models) {
    // associations can be defined here
      purpose.belongsTo(models.user);
      purpose.belongsTo(models.role);
  };
  return purpose;
};