const mongoose = require("mongoose")

const turnSchema = mongoose.Schema({
    contacts: Number,
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    date: {
        type: String
    },
    service: {
        ref: "Services",
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Turn = mongoose.model("Turn", turnSchema);

module.exports = Turn