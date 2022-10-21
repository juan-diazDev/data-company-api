/* eslint-disable no-unused-vars */
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;

// const User = sequelize.define('user', {
//   fullname: DataTypes.STRING,
//   email: DataTypes.STRING,
//   password: DataTypes.STRING,
//   role: DataTypes.STRING,
// });

// async function main() {
//   const juan = await User.create({
//     fullname: 'Juanito Diaz',
//     email: 'ju@g.com',
//     password: '123',
//     role: 'admin',
//   });

//   const users = await User.findAll();
//   console.log('🚀 ~ file: db.js ~ line 30 ~ main ~ users', users);
// }

// main();
