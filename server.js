const express = require("express");
const router = require("./routes/auth");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// virification token / login
const verifyMidlewares = require('./middlewares/virifyToken');


// router
const auth = require("./routes/auth");
const hotel = require("./routes/hotel");
const user = require("./routes/users",);


// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect database
mongoose.connect(process.env.DB_CONNECT, () => console.log("connected to db"));

// Route middlewares
app.use("/api", auth);
app.use("/api/hotel", hotel);
app.use("/api/user",verifyMidlewares.virifylogin,verifyMidlewares.UserRole('admin'),user);


app.listen(5500, () => console.log("Server is running"));
