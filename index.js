require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');

const configExpress = require('./config/express');
const routes = require('./routes');

const app = express();

app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    configExpress(app);

    routes(app);

    console.log(`Server running on port http://localhost:${PORT}`);
  } catch (error) {
    console.log({ ERROR: error.message });
  }
});

// //importing modules
// const express = require("express");
// const db = require("../Models");
// //Assigning db.users to User variable
//  const User = db.users;

// //Function to check if username or email already exist in the database
// //this is to avoid having two users with the same username and email
//  const saveUser = async (req, res, next) => {
//  //search the database to see if user exist
//  try {
//    const username = await User.findOne({
//      where: {
//        userName: req.body.userName,
//      },
//    });
//    //if username exist in the database respond with a status of 409
//    if (username) {
//      return res.json(409).send("username already taken");
//    }

//    //checking if email already exist
//    const emailcheck = await User.findOne({
//      where: {
//        email: req.body.email,
//      },
//    });

//    //if email exist in the database respond with a status of 409
//    if (emailcheck) {
//      return res.json(409).send("Authentication failed");
//    }

//    next();
//  } catch (error) {
//    console.log(error);
//  }
// };

// //exporting module
//  module.exports = {
//  saveUser,
// };
