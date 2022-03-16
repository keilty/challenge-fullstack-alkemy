const express = require('express');
const router = express.Router();
const {all, latest, income, expense, balance, create, update, destroy, categoryTransactions} = require('../controllers/transactionsController');

//Routes
router
    .get('/transactions/all', all)
    .get('/transactions/latest', latest)
    .get('/transactions/income', income)
    .get('/transactions/expense', expense)
    .get('/transactions/balance', balance)
    .post('/transactions/create', create)
    .put('/transactions/update/:id', update)
    .delete('/transactions/delete/:id', destroy)
    .get('/transactions/category/:id', categoryTransactions)
   
module.exports = router;