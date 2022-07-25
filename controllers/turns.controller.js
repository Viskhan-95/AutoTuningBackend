const Turn = require("../models/Turn.model")


module.exports.turnsController = {
    postTurns: async (req, res) => {
        try {
            const { contacts, user, date } =req.body
            const turn = await Turn.create({
                contacts,
                user,
                date
            })
            res.json(turn)
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    }
}