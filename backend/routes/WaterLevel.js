const express = require('express');
const router = express.Router();
const waterLevelControllers = require('../controllers/WaterLevel');

router.get('/', waterLevelControllers.getAllWaterLevels);
router.get('/:id', waterLevelControllers.getWaterLevelById);
router.post('/', waterLevelControllers.createWaterLevel);
router.put('/', waterLevelControllers.updateWaterLevel);
router.delete('/:id', waterLevelControllers.deleteWaterLevel);



module.exports = router;