const router = require("express").Router();
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const authController = require("../controller/authController")
// const {registerValidation} = require('../validation');

// register
router.post("/register",authController.registerUser);

// login

router.post("/login",authController.loginUser);

module.exports = router;
