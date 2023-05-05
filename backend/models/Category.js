
module.exports = (Sequelize, DataTypes) => {
    const Category = Sequelize.define('Categories', {
      name: DataTypes.STRING,
    });
  
    return Category;
  };