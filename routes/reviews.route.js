const { Router } = require("express")
const { reviewController } = require("../controllers/reviews.controller")

const router = Router()

router.post('/reviews', reviewController.postReview)
router.patch('/reviews:/id', reviewController.patchReview)
router.patch('/reviews:/id', reviewController.delReview)
router.get('/reviews', reviewController.get)

module.exports = router
