const Sequelize = require('sequelize');
const DataTypes = require('sequelize')
const sequelize = new Sequelize('mydb',null,null,{dialect:'sqlite',storage:'database.db'});

const User = require('../models/User')(sequelize,DataTypes);
const Category = require('../models/Category')(sequelize,DataTypes);
const Product = require('../models/Product')(sequelize,DataTypes);

// Product.associate = (models) => {
    Product.belongsTo(Category,{foreignKey:'categoryId'});
//   };
// Category.associate = (models) => {
    Category.hasMany(Product,{foreignKey:'categoryId'});
//   };

module.exports = {
    User,
    Category,
    Product
}