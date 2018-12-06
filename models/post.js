'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    firstName: DataTypes.STRING,
    postText: DataTypes.TEXT,
    titleText: DataTypes.STRING
  }, {});
  post.associate = function(models) {
      post.belongsTo(models.user, {foreignKey: 'firstName', targetKey: 'id'});
  };
  return post;
};