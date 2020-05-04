const router=require('express').Router();
const adminController=require('../controllers/admin')
const path=require('path');


router.get('/add-product', adminController.getAddProduct)
router.post('/add-product', adminController.postAddProduct)
router.get('/products', adminController.getProducts)


module.exports=router;
//exports.products=products;
