const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/User');

router.get('/', userControllers.getAllUsers);
router.get('/:id', userControllers.getUserById);
router.post('/', userControllers.createUser);
router.post('/register', userControllers.registerUser);
router.post('/login', userControllers.loginUser);
router.put('/', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);


module.exports = router;