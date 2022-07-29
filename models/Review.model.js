const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    servicesId: {
        ref: "Services",
        type: mongoose.SchemaTypes.ObjectId,
    },
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