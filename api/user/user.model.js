const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM({
      values: ['ADMIN', 'USER'],
    }),
    defaultValue: 'User',
  },
});

module.exports = User;
