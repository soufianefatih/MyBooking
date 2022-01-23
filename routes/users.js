const router = require("express").Router();
const UserController = require('../controller/userController');



// ALL Users
router.get("/users", UserController.Allusers);


// update user
router.post("/update/:id", UserController.UpdateUsers);
  
module.exports = router;
