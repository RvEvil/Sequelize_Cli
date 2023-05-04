module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    modelName: 'User',
  });

  User.associate = function(models) {
    // define association here
  };

  return User;
};
