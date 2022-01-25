require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require('cors')
// const User = require("./model/user");
const auth = require("./middleware/auth");

const app = express();
require("dotenv").config();


app.use(express.json({ limit: "50mb" }));





// app.use((req, res, next) => {
//   User.findById('61efa313f1416a2ff8a2a0d7')
//     .then(user => {
//       req.user = new User (user.first_name,user.last_name,user.email,user.cart,user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });







const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin');


app.use(adminRoutes)
app.use(authRoutes)

app.use(cors({
  origin : "http://localhost:4200"
}))

app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", '*')

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")

  if (req.method === 'OPTIONS') {

      res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,PATCH,DELETE')

      return res.status(200).json({})

  }

  next()

})

app.get("/welcome",  (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;
