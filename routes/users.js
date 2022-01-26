const router = require("express").Router();
const UserController = require('../controller/userController');



// ALL Users
router.get("/", UserController.Allusers);


// update user
router.put("/update/:id", UserController.UpdateUsers);
// get one user
router.get("/:id", UserController.OneUser);
// delete user
router.delete("delete/:id", UserController.DeleteUser);
  
// cretate user 
router.post("/create", UserController.createUser);


module.exports = router;
