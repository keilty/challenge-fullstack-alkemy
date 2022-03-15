const express = require('express');
const router = express.Router();
const {transactions} = require('../controllers/transactionsController');

//Routes
router
    .get('/transactions', transactions)


    
module.exports = router;