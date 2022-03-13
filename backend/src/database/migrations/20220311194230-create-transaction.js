'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      concept: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        references : {
          model : 
            'Users' 
        ,
          key : 'id'
        }
      },
      transaction_type_id: {
        type: Sequelize.INTEGER,
        references : {
          model : 
            'Transaction_types' 
        ,
          key : 'id'
        }
      },
      category_id: {
        type: Sequelize.INTEGER,
        references : {
          model : 
           'Categories' 
        ,
          key : 'id'
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};