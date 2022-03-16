const express = require('express');
const router = express.Router();
const {categories, category, transactionType, filter} = require('../controllers/categoriesController');

//Routes
router
    .get('/categories', categories)
    .get('/category/:id', category)
    .get('/transaction-type', transactionType)

module.exports = router;