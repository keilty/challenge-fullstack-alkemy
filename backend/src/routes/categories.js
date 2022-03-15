const express = require('express');
const router = express.Router();
const {categories, transactionTypes, category, filter} = require('../controllers/categoriesController');

//Routes
router
    .get('/categories', categories)
    .get('/transaction-types', transactionTypes)
    .get('/categories/:id', category)
    .get('/filter/:type/:category', filter)


    
module.exports = router;