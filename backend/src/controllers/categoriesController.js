const db = require('../database/models');
const { Op } = require("sequelize")

const throwError = (res, error) => {
    console.log(error);
    return res.status(error.status).json({
        meta: {
            status: error.status || 500
        },
        data: error.message
    })
} 

module.exports = {
    categories:  async (req, res) => {
        try {
            let categories = await db.Category.findAll();

            let response = {
                meta: {
                    status: 200,
                    total: categories.length,
                    url: 'api/categories'
                },
                data: categories
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    },
    category : async (req,res) => {
        try {
            if (isNaN(req.params.id)) {
                let error = new Error('ID Must be a number');
                error.status = 404;

                throw error;
            }

            let category = await db.Category.findAll({
                include: [{ all: true }],
                order: [['id', 'DESC']],
                where : {
                    id: req.params.id
                }
            });

            if (!category) {
                let error = new Error('Nonexistent ID')
                error.status = 404; 

                throw error; 
            }

            let response = {
                meta : {
                    status: 200,
                    url: 'api/category/'+req.params.id
                },
                data : category
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    },
    transactionType : async (req,res) => {
        try {

            let transactionType = await db.Transaction_type.findAll();

            let response = {
                meta : {
                    status: 200,
                    url: 'api/transaction-type/'
                },
                data : transactionType
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    }
}