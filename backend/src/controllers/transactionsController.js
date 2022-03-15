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
    transactions:  async (req, res) => {
        try {
            let transactions = await db.Transaction.findAll();

            let response = {
                meta: {
                    status: 200,
                    total: transactions.length,
                    url: 'api/transactions'
                },
                data: transactions
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    },
}