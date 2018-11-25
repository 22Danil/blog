'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    firstName: DataTypes.STRING,
    postText: DataTypes.TEXT
  }, {});
  post.associate = function(models) {
    // associations can be defined here
      //post.belongsTo(models.user);
      post.belongsTo(models.user, {foreignKey: 'firstName', targetKey: 'id'});
  };
  return post;
};