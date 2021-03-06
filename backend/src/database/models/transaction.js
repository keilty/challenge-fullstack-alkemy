'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      Transaction.belongsTo(models.Category, {

        as: 'category',
        
        foreignKey: 'category_id'
      }),
      Transaction.belongsTo(models.Transaction_type, {

        as:'transactionType',

        foreignKey: 'transaction_type_id'
      }),
      Transaction.belongsTo(models.User, {

        as:'user',

        foreignKey: 'user_id'
      })
    }
  };
  Transaction.init({
    amount: DataTypes.INTEGER,
    concept: DataTypes.STRING,
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    transaction_type_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};