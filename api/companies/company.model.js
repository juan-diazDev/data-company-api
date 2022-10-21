const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Company = sequelize.define('companies', {
  id: {
    type: DataTypes.UUID,
    primaryKey: false,
    allowNull: false,
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
  number: {
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
