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
    users:  async (req, res) => {
        try {
            let users = await db.User.findAll();

            let response = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    },
    user : async (req,res) => {
        try {
            if (isNaN(req.params.id)) {
                let error = new Error('ID Must be a number');
                error.status = 404;

                throw error;
            }

            let user = await db.User.findAll({
                include: [{ all: true }],
                order: [['id', 'DESC']],
                where : {
                    id: req.params.id
                }
            });

            if (!user) {
                let error = new Error('Nonexistent ID')
                error.status = 404; 

                throw error; 
            }

            let response = {
                meta : {
                    status: 200,
                    url: 'api/users/'+req.params.id
                },
                data : user
            }

            return res.status(200).json(response)
        } catch (error) {
            throwError(res, error);
        }
    },
}