'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    nomination: DataTypes.STRING
  }, {});
  role.associate = function(models) {
    // TODO выпилить коментраии с кода
    // associations can be defined here
  };
  return role;
};
