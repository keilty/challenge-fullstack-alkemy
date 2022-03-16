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
    all:  async (req, res) => {
        try {
            let allTransactions = await db.Transaction.findAll();

            let response = {
                meta: {
                    status: 200,
                    total: allTransactions.length,
                    url: 'api/transactions/all'
                },
                data: allTransactions
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    },
    latest: async (req, res) => {
        try {
            let latest = await db.Transaction.findAll({
                include: [{ all: true }],
                order: [['id', 'DESC']],
                limit: 10
            });

            let response = {
                meta: {
                    status: 200,
                    total: latest.length,
                    url: 'api/transactions/latest'
                },
                data: latest
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    },
    income: async (req, res) => {
        try {
            let income = await db.Transaction.findAll({
                include: [{ all: true }],
                order: [['id', 'DESC']],
                where: {
                    transaction_type_id: 1
                }
            });

            let response = {
                meta: {
                    status: 200,
                    total: income.length,
                    url: 'api/transactions/income'
                },
                data: income
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    },
    expense: async (req, res) => {
        try {
            let expense = await db.Transaction.findAll({
                include: [{ all: true }],
                order: [['id', 'DESC']],
                where: {
                    transaction_type_id: 2
                }
            });

            let response = {
                meta: {
                    status: 200,
                    total: expense.length,
                    url: 'api/expense'
                },
                data: expense
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    },
    balance: async (req, res) => {
        try {
            let income = await db.Transaction.sum('amount', {
                where: {
                    transaction_type_id: 1
                }
            });

            let expenses = await db.Transaction.sum('amount', {
                where: {
                    transaction_type_id: 2
                }
            });

            let balance;
            if (!expenses && !income) {
                balance = 0;
            } else {
                balance = income - expenses;
            }

            let response = {
                meta: {
                    status: 200,
                    url: 'api/transactions/balance'
                },
                data: balance
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    },
    create: async (req, res) => {
        try {
            let transaction = await db.Transaction.create({
                ...req.body
            })

            let response = {
                meta: {
                    status: 201,
                    url: 'api/transactions/create', 
                    msg: 'New transaction successfully created'  
                },
                data: transaction
            }

            return res.status(201).json(response)

        } catch (error) {
            throwError(res, error);
        }
    },
    update: async (req, res) => {
        try {

            if (isNaN(req.params.id)) {
                let error = new Error('Wrong ID type');
                error.status = 422;

                throw error;
            }

            req.body.date ? req.body.date : req.body.date = new Date;
            let transaction = await db.Transaction.update(
                {
                    ...req.body
                },
                {
                    where : {
                        id : req.params.id
                    }
                }
            )

            let response;
            if(transaction[0] === 1){                
                response = {
                    meta: {
                        status: 201,
                        url: 'api/transactions/update' + transaction.id,
                        msg: 'Transaction updated successfully'
                    } 
                }
                return res.status(201).json(response)
            }else{
                transaction = {
                    meta: {
                        status: 204,
                        url: 'api/transactions/update' + transaction.id,
                        msg: 'The transaction could not be updated'
                    }
                }
                return res.status(204).json(response)
            }

        } catch (error) {
            throwError(res, error);
        }
    },
    destroy: async (req,res) => {
        try {

            if (isNaN(req.params.id)) {
                let error = new Error('Wrong ID type');
                error.status = 422;

                throw error;
            }

            let transaction = await db.Transaction.destroy(
                {
                    where : {
                        id : req.params.id
                    }
                }
            )

            let response;

            if(transaction[0] === 1){
                response = {
                    meta: {
                        status: 201,
                        url: 'api/transactions/delete/' + transaction.id,
                        msg: 'Transaction successfully deleted'
                    }
                }
                return res.status(201).json(response)
            }else{
                response = {
                    meta: {
                        status: 204,
                        url: 'api/transactions/delete' + transaction.id,
                        msg: 'The transaction could not be deleted'
                    }
                }
                return res.status(204).json(response)
            }
            
        } catch (error) {
            throwError(res, error);
        }
    },
    categoryTransactions : async (req,res) => {
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
}