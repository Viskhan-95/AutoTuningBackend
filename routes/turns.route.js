const { Router } = require("express")
const { turnsController } = require("../controllers/turns.controller")

const router = Router()

router.post('/turn', turnsController.postTurns)
router.get('/turn', turnsController.getTurn)

module.exports = router