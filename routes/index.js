const { Router } = require('express');

const route = Router();

route.use(require('./reviews.route'));
route.use(require('./services.route'));
route.use(require('./users.route'));

module.exports = route;