const express = require('express');
const router = express.Router();
const {users, user, create, update, destroy} = require('../controllers/usersController');

//Routes
router
    .get('/users', users)
    .get('/users/:id', user)
    .post('/users/create', create)
    .put('/users/update/:id', update)
    .delete('/users/delete/:id', destroy)


module.exports = router;