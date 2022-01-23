const router = require("express").Router();
const UserController = require('../controller/userController');



// ALL Users
router.get("/api/users", UserController.Allusers);


// update user
router.post("/api/user/update/:id", UserController.UpdateUsers);
  
