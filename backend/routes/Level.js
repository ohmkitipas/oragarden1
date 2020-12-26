const express = require('express');
const router = express.Router();
const levelController = require('../controllers/Level');

router.get('/', levelController.getAllLevels);
router.get('/:id', levelController.getLevelById);
router.post('/', levelController.createLevel);
router.put('/', levelController.updateLevel);
router.delete('/:id', levelController.deleteLevel);


module.exports = router;