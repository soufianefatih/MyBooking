const router = require("express").Router();
const HotelController = require('../controller/hotelController');






// ALL Hotels
// router.get("/",HotelController.AllHotel);


// update hotel
router.put("/update/:id",HotelController.UpdateHotel);

// get one hotelr
// router.get("/:id", HotelController.OneHotel);

// delete hotel
router.delete("/delete/:id", HotelController.DeleteHotel);
  
// cretate hotel 
router.post("/create", HotelController.HotelCreate);


module.exports = router;