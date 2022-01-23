const router = require("express").Router();
const AuthController = require('../controller/authController');


// register
router.post("/api/user/register", AuthController.registerUser);



// login

router.post("/api/user/login",AuthController.loginUser);

module.exports = router;
