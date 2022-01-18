const express = require('express');
const router = require('./routes/auth');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


// router 
const auth = require('./routes/auth');


// connect database
mongoose.connect(process.env.DB_CONNECT,() => console.log('connected to db'))

// Route middlewares
app.use('/api/user',auth);
app.listen(5500,()=> console.log('Server is running'));