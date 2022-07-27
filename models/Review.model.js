const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    user:{
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    data: {
        type: Date,
        default: Date.now,
    },
    rating: Number,
    plus: String,
    minus: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;