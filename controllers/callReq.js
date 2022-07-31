const CallReq = require('../models/CallReq')

module.exports.callReqController = {
    postReq: async ( req, res) =>{
        try {
            const data = await CallReq.create({
                userName: req.body.userName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email
            })
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    getReqs: async (req, res) =>{
        try {
            const data = await CallReq.find()
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    delReq: async (req, res) =>{
        try {
            const data = await CallReq.findByIdAndDelete(req.params.id)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    }
}