const { Router } = require('express');

const router = Router();

router.use(require('./reviews.route'));
router.use(require('./services.route'));
router.use(require('./users.route'));

module.exports = router