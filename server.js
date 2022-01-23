const express = require("express");
const router = require("./routes/auth");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// router
const auth = require("./routes/auth");
const user = require("./routes/users");
const post = require("./routes/posts");



// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect database
mongoose.connect(process.env.DB_CONNECT, () => console.log("connected to db"));



app.listen(5500, () => console.log("Server is running"));
