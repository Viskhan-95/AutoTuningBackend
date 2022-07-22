const { Router } = require('express')
const { userController } = require('../controllers/users.controller')
const router = Router()

router.get('/user', userController.getUser)
router.post('/user', userController.postUser)
router.post('/login', userController.login)
router.delete('/user/:id', userController.deleteUser)
router.patch('/user/:id', userController.patchUser)

module.exports = router;