const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    login: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        default: "user"
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;