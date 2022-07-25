const { Router } = require("express")
const { turnsController } = require("../controllers/turns.controller")

const router = Router()

router.post('/turn', turnsController.postTurns)

module.exports = router