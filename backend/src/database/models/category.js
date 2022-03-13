'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      Category.hasMany(models.Transaction,{
        as: {
          singular: 'transaction',
          plural: 'transactions'
        },
        foreignKey: 'category_id'
      })
      Category.belongsTo(models.Transaction_type,{
        as: {
          singular: 'transactionType',
          plural: 'transactionTypes'
        },
        foreignKey : 'transaction_type_id'
      })
    }
  };
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};