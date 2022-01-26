const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  role: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
}
});

module.exports = mongoose.model("User", userShema);
