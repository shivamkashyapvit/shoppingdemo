const authController = require('../controllers/auth')
const express = require('express');
const router = express.Router();

require("dotenv").config();


router.post("/signup",authController.signup);

router.post("/login", authController.login );





module.exports= router;
