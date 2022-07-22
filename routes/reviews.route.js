const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controller");
const authMiddleware = require("../middleware/authMiddleware")

const router = Router();

router.get('/reviews', reviewController.getReview);
router.post('/reviews', authMiddleware, reviewController.postReview);
router.patch('/reviews/:id', authMiddleware, reviewController.patchReview);
router.delete('/reviews/:id', authMiddleware, reviewController.delReview);

module.exports = router;
