const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    image_cover: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    image: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    star: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true,
    },
    status: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true,
    }
});

module.exports = mongoose.model("Hotel", hotelSchema );