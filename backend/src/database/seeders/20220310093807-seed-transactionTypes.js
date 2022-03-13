'use strict';

const transactionTypes = [
  {
    name : 'income',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'expense',
    createdAt : new Date,
    updatedAt : new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Transaction_types', transactionTypes, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Transaction_types', null, {});

  }
};