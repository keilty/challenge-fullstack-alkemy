'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      Transaction_type.hasMany(models.Transaction,{
        as: {
          singular: 'transactionTypes',
          plural: 'transactionTypes'
        },
        foreignKey: 'transaction_type_id'
      })
      Transaction_type.hasMany(models.Category,{
        as: {
          singular: 'category',
          plural: 'categories'
        },
        foreignKey: 'transaction_type_id'
      })
    }
  };
  Transaction_type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction_type',
  });
  return Transaction_type;
};