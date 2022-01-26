const Hotel = require("../model/Hotel");


exports.HotelCreate = async(req,res)=>{

  const newHotel = await Hotel.create({
      
     name : req.body.name,
     description: req.body.description,
     image : req.body.image,
     start : req.body.start,
     status: req.body.status,
  });
  try {
    res.json(newHotel);
  } catch (err) {
    res.status(400).send("bad request");
  }
};

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




  exports.DeleteHotel = async (req, res) => { 
    try {
        await Hotel.deleteOne(req.params.id);
    
        res.json('DELETE HOTEL');
      } catch (error) {
        res.status(400).send(error);
      }
  };








