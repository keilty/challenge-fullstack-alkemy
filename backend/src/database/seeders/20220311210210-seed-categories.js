'use strict';

const categories = [
  {
    name : 'bills',
    transaction_type_id: 2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'clothes',
    transaction_type_id: 2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'entertaiment',
    transaction_type_id: 2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'groceries',
    transaction_type_id: 2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'transportation',
    transaction_type_id: 2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'other',
    transaction_type_id: 2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'gift',
    transaction_type_id: 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'salary',
    transaction_type_id: 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'side hustle',
    transaction_type_id: 1,
    createdAt : new Date,
    updatedAt : new Date
  }
]


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Categories', categories, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Categories', null, {});
    
  }
};