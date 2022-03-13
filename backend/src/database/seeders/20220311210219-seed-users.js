'use strict';
const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'superadmin',
    email: 'superadmin@challenge.com',
    password: bcrypt.hashSync('123123',10),
    rol_id: 1,
    createdAt: new Date,
    updatedAt: new Date
    },
  {
    name: 'Roberto Carlos',
    email: 'robertocarlos3@gmail.com',
    password: bcrypt.hashSync('123123',10),
    rol_id: 2,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Juan Valdez',
    email: 'juanvaldez@gmail.com',
    password: bcrypt.hashSync('123123',10),
    rol_id: 2,
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Users', users, {});
    
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
