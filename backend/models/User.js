module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INTEGER
    });
  
    return User;
  };