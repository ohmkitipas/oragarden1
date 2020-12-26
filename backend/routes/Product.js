const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/Product');

router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getProductById);
router.post('/', productControllers.createProduct);
router.put('/', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);

module.exports = router;