const mongoose = require('mongoose')

const callReqSchema = mongoose.Schema({
    userName: String,
    phoneNumber: Number,
    email: String
})

const CallReq = mongoose.model('CallReq', callReqSchema)

module.exports = CallReq