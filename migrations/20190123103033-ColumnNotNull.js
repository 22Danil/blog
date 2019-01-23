'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('users', 'firstName', {
              type: Sequelize.TEXT,
              allowNull: false
          }),
          queryInterface.changeColumn('users', 'email', {
              type: Sequelize.TEXT,
              allowNull: false
          }),
          queryInterface.changeColumn('users', 'password', {
              type: Sequelize.TEXT,
              allowNull: false
          }),
          queryInterface.changeColumn('users', 'sault', {
              type: Sequelize.TEXT,
              allowNull: false
          }),
          queryInterface.changeColumn('roles', 'nomination', {
              type: Sequelize.TEXT,
              allowNull: false
          }),
          queryInterface.changeColumn('purposes', 'nominationId', {
              type: Sequelize.INTEGER,
              allowNull: false
          }),
          queryInterface.changeColumn('purposes', 'userID', {
              type: Sequelize.INTEGER,
              allowNull: false
          }),
          queryInterface.changeColumn('posts', 'userID', {
              type: Sequelize.INTEGER,
              allowNull: false
          }),
          queryInterface.changeColumn('posts', 'postText', {
              type: Sequelize.TEXT,
              allowNull: false
          }),
          queryInterface.changeColumn('posts', 'titleText', {
              type: Sequelize.TEXT,
              allowNull: false
          })
      ]);
  },
  down: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('users', 'firstName', {
              type: Sequelize.TEXT,
              allowNull: true
          }),
          queryInterface.changeColumn('users', 'email', {
              type: Sequelize.TEXT,
              allowNull: true
          }),
          queryInterface.changeColumn('users', 'password', {
              type: Sequelize.TEXT,
              allowNull: true
          }),
          queryInterface.changeColumn('users', 'sault', {
              type: Sequelize.TEXT,
              allowNull: true
          }),
          queryInterface.changeColumn('roles', 'nomination', {
              type: Sequelize.TEXT,
              allowNull: true
          }),
          queryInterface.changeColumn('purposes', 'nominationId', {
              type: Sequelize.INTEGER,
              allowNull: true
          }),
          queryInterface.changeColumn('purposes', 'userID', {
              type: Sequelize.INTEGER,
              allowNull: true
          }),
          queryInterface.changeColumn('posts', 'userID', {
              type: Sequelize.INTEGER,
              allowNull: true
          }),
          queryInterface.changeColumn('posts', 'postText', {
              type: Sequelize.TEXT,
              allowNull: true
          }),
          queryInterface.changeColumn('posts', 'titleText', {
              type: Sequelize.TEXT,
              allowNull: true
          })
      ]);
  }
};