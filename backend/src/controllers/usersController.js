const db = require('../database/models');
const { Op } = require("sequelize")
const bcrypt = require('bcryptjs');

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
    create: async (req, res) => {
        try {

            const { name, email, password } = req.body;

            let newUser = await db.User.create({
                name: name.trim(),
                email: email.trim(),
                password: bcrypt.hashSync(password, 12),
            })

            let response = {
                meta: {
                    status: 201,
                    url: 'api/users/create', 
                    msg: 'New user successfully created'  
                },
                data: newUser
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

            const { name, password } = req.body;


            let user = await db.User.update(
                {
                    name: name.trim(),
                    password: bcrypt.hashSync(password, 12)
                },
                {
                    where : {
                        id : req.params.id
                    }
                }
            )

            let response;
            if(user[0] === 1){                
                response = {
                    meta: {
                        status: 201,
                        url: 'api/users/update' + user.id,
                        msg: 'User updated successfully'
                    } 
                }
                return res.status(201).json(response)
            }else{
                user = {
                    meta: {
                        status: 204,
                        url: 'api/users/update' + transaction.id,
                        msg: 'The update could not be updated'
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

            let user = await db.User.destroy(
                {
                    where : {
                        id : req.params.id
                    }
                }
            )

            let response;

            if(user[0] === 1){
                response = {
                    meta: {
                        status: 201,
                        url: 'api/users/delete/' + user.id,
                        msg: 'User successfully deleted'
                    }
                }
                return res.status(201).json(response)
            }else{
                response = {
                    meta: {
                        status: 204,
                        url: 'api/users/delete' + user.id,
                        msg: 'The user could not be deleted'
                    }
                }
                return res.status(204).json(response)
            }
            
        } catch (error) {
            throwError(res, error);
        }
    }
}