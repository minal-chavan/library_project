'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ledgers', {
      issue_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: {
    model: 'books',
    key: 'book_id'
  },
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
    model: 'students',
    key: 'student_id'
  },
      },
      issue_date: {
        type: Sequelize.DATE
      },
      return_status: {
        type: Sequelize.STRING
      },
      return_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ledgers');
  }
};

/*router deploying in server.js file*/
