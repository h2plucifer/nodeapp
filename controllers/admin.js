
const Product =require('../models/product');


exports.getAddProduct=((req,res)=>{
    res.render('admin/add-product' ,
    {
        pageTitle:'Add Product',
        path:"/admin/add-product",
    })
})

exports.postAddProduct=((req,res,next)=>{

    const title=req.body.title;
    const description=req.body.tdescriptionitle;
    const imageUrl=req.body.imageUrl;
    const price=req.body.title;

    const product=new Product(title,imageUrl,description,price);
    product.save();
    res.redirect("/");
})

exports.getProducts=((req,res,next)=>{
        Product.fetchAll((products)=>{
            
                console.log(products)
                res.render('admin/products',{
                    prods:products,
                    pageTitle:'Admin Products',
                    path:'/admin/products',
                })
            
        });
})

