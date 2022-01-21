const router = require("express").Router();
const verify = require('./virifyToken');

router.get("/", verify,(req, res) => {
  res.json({ posts: { title: "first post", desscription: "new post" } });
});

module.exports = router;
