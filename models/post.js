'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    firstName: DataTypes.STRING,
    postText: DataTypes.TEXT,
    titleText: DataTypes.STRING
  }, {});
  post.associate = function(models) {
      // TODO внешний ключ на имя пользователя это не правильно сделай его на id пользователя
      post.belongsTo(models.user, {foreignKey: 'firstName', targetKey: 'id'});
  };
  return post;
};
