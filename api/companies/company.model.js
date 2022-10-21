const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Company = sequelize.define('companies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: false,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  NIT: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Company;
