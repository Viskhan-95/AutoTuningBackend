const { Router } = require("express")
const { turnsController } = require("../controllers/turns.controller")

const router = Router()

router.post('/turn', turnsController.postTurns)
router.get('/turn', turnsController.getTurn)
router.delete("/turn/:id", turnsController.delTurn)

module.exports = router