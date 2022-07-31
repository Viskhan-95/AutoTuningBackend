const { Router } = require('express')
const { callReqController } = require('../controllers/callReq')

const router = Router()

router.get('/callReqs', callReqController.getReqs)
router.post('/callReqs', callReqController.postReq)
router.delete('/callReqs/:id', callReqController.delReq)

module.exports = router