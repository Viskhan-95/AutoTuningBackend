const Turn = require("../models/Turn.model")


module.exports.turnsController = {
    postTurns: async (req, res) => {
        try {
            const { contacts, user, date, service } = req.body
            const turn = await Turn.create({
                contacts,
                service,
                user,
                date
            })
            res.json(turn)
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    },
    getTurn: async (req, res) => {
        const {id} = req.params
        try {
            const turns = await Turn.find()
            res.json(turns)
        } catch (error) {
            res.json(error)
        }
    }
}