'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    firstName: DataTypes.STRING,
    postText: DataTypes.TEXT
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
      Posts.belongsTo(models.Client);
  };
  return Posts;
};