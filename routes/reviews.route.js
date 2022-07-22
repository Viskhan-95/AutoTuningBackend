const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controller");

const router = Router();

router.get('/reviews', reviewController.getReview);
router.post('/reviews', reviewController.postReview);
router.patch('/reviews:/id', reviewController.patchReview);
router.delete('/reviews:/id', reviewController.delReview);

module.exports = router;
