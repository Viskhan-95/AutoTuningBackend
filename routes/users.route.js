const { Router } = require('express');
const { userController } = require('../controllers/users.controller');
const router = Router();

router.get('/user', userController.getUser);
router.post('/user', userController.postUser);
router.post('/login', userController.login);
router.patch('/user/:id', userController.patchUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;