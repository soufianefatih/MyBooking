const User = require("../model/User");



exports.Allusers = async (req, res) => {
    //   res.json(req.body);
    try {
      const users = await User.find({});
  
      res.json(users);
    } catch (error) {
      res.status(400).send(error);
    }
  };




  exports.UpdateUsers = async (req, res) => {
    const users = await User.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
      { returnDocument: "after" }
    );
  
    try {
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  };