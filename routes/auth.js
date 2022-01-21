const router = require("express").Router();
const User = require("../model/User");
const jwt = require("jsonwebtoken");
// const {registerValidation} = require('../validation');

// register
router.post("/register", async (req, res) => {
  res.json(req.body);

  // validation data
  // const {eroor} = registerValidation(req.body);
  // if (eroor) {return res.status(400).send(eroor.details[0].message);}

  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    res.json(newUser);
  } catch (err) {
    res.status(400).send("bad request");
  }
});

// ALL Users
router.get("/", async (req, res) => {
  //   res.json(req.body);
  try {
    const users = await User.find({});

    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

// update user
router.post("/users/update/:id", async (req, res) => {
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
});

// login

router.post("/login", async (req, res) => {
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
      res.send({ token });
    });

    //  res.json({message: 'login '});
  }
});

module.exports = router;
