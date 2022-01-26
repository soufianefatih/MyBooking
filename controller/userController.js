const User = require("../model/User");




exports.createUser = async (req, res) => {
  res.json(req.body);
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role : req.body.role,
  });

  try {
    res.json(newUser);
  } catch (err) {
    res.status(400).send("bad request");
  }
};


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



  exports.OneUser = async (req, res) => { 
    try {
        const users = await User.findById(req.params.id);
    
        res.json(users);
      } catch (error) {
        res.status(400).send(error);
      }
};


exports.DeleteUser = async (req, res) => { 
  try {
      await User.deleteOne(req.params.id);
  
      res.json('DELETE USER');
    } catch (error) {
      res.status(400).send(error);
    }
};