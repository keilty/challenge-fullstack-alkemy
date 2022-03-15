const express = require('express');
const router = express.Router();
const {users, user} = require('../controllers/usersController');

//Routes
router
    .get('/users', users)
    .get('/users/:id', user)



    
module.exports = router;