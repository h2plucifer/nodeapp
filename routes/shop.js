const router=require('express').Router();
const shopController=require('../controllers/shop')

const path=require('path');



router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/checkout', shopController.getCheckout);
router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);


module.exports=router;