const router=require('express').Router();
const path=require('path');


const products=[];

router.get('/add-product',(req,res)=>{
    //res.sendFile(path.join(__dirname,"../","views","add-product.ejs "))       ;
    res.render('add-product' ,{pageTitle:'Add Product'})
})
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    products.push({title:req.body.title})
    res.redirect("/");
})


module.exports=router;
