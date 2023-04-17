const express = require('express');
const router = express.Router();

const products_api_controller = require('../../../controllers/api/v1/products');

router.get('/', products_api_controller.getProducts);
router.post('/create', products_api_controller.addProduct);
router.delete('/:id', products_api_controller.deleteProduct);
router.post('/:id/update_quantity', products_api_controller.updateProduct);

module.exports = router;