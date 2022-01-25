const adminController = require('../controllers/admin');
const express = require('express');
const router = express.Router();




router.post('/add-product', adminController.postAddProduct);  
router.get('/products', adminController.getAllProducts);  
router.post('/delete/:productId', adminController.postDeleteProduct);  

router.get('/products/:productId', adminController.getProductForEdit)


module.exports = router;
