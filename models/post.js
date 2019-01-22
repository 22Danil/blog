'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
      userID: DataTypes.INTEGER,
    postText: DataTypes.TEXT,
    titleText: DataTypes.TEXT
  }, {});
  post.associate = function(models) {
      post.belongsTo(models.user, {foreignKey: 'userID'});
  };
  return post;
};
