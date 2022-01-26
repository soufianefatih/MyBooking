const User = require("../model/User");
const jwt = require("jsonwebtoken");



exports.registerUser = async (req, res) => {
    res.json(req.body);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role : 'client',
    });
  
    try {
      res.json(newUser);
    } catch (err) {
      res.status(400).send("bad request");
    }
  };




  exports.loginUser =  async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
      //  password: req.body.password,
    });
  
    // check email is exit
    if (!user || user.password != req.body.password) {
      res.status(400).json({ message: "user is not found" });
    } else {
      jwt.sign({ user }, process.env.TOKEN_SECRET, (err, token) => {
        if (err) {
          res.json({ message: "validate not correct" });
        }
        res.send({token });
      });
  
      //  res.json({message: 'login '});
    }
  };
  