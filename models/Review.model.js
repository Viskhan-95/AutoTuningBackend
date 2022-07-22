const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    user:{
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    text: String,
    rating: Number
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;