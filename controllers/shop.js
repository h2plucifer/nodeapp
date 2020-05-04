
const Product =require('../models/product');

exports.getProducts=((req,res,next)=>{
        Product.fetchAll((products)=>{
            
                console.log(products)
                res.render('shop/product-list',{
                    prods:products,
                    pageTitle:'Shop',
                    path:'/products'
                })
            
        });
})


exports.getIndex=((req,res,next)=>{
    Product.fetchAll((products)=>{
            
        console.log(products)
        res.render('shop/index',{
            prods:products,
            pageTitle:'Home Page',
            path:'/'
        })
    
});
})


exports.getCart=((req,res,next)=>{
    Product.fetchAll((products)=>{
            
        res.render('shop/cart',{
            prods:products,
            pageTitle:'Your cart',
            path:'/cart'
        })
    
});
})
exports.getOrders=((req,res,next)=>{
    Product.fetchAll((products)=>{
            
        res.render('shop/orders',{
            prods:products,
            pageTitle:'Your orders',
            path:'/orders'
        })
    
});
})

exports.getCheckout=((req,res,next)=>{
    Product.fetchAll((products)=>{
            
        res.render('shop/checkout',{
            prods:products,
            pageTitle:'checkout',
            path:'/checkout'
        })
    
});
})


