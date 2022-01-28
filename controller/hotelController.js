const Hotel = require("../model/Hotel");

// create hotel
exports.HotelCreate = async(req,res)=>{

  const newHotel = await Hotel.create({
      
     name : req.body.name,
     description: req.body.description,
     image : req.body.image,
     image_cover : req.body.image_cover,
     star : req.body.star,
     status: req.body.status,
  });
  try {
    res.json(newHotel);
  } catch (err) {
    res.status(400).send("bad request");
  }
};

// update hotel

exports.UpdateHotel = async (req, res) => {
    const hotels = await Hotel.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        name : req.body.name,
        description: req.body.description,
        image : req.body.image,
        start : req.body.start,
        status: req.body.status,
      },
      { returnDocument: "after" }
    );
  
    try {
      res.send(hotels);
    } catch (error) {
      res.status(500).send(error);
    }
  };


//  delete hotel

  exports.DeleteHotel = async (req, res) => { 
    await Hotel.deleteOne({_id:req.params.id});
    try {
    
        res.json('DELETE HOTEL');
      } catch (error) {
        res.status(400).send(error);
      }
  };








