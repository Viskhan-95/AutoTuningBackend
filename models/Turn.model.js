const mongoose = require("mongoose")

const turnSchema = mongoose.Schema({
    contacts: Number,
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    date: Date
})

const Turn = mongoose.model("Turn", turnSchema);

module.exports = Turn