const fs=require('fs');
const path=require('path');
const dataPath=path.join(__dirname,"..","data","product.json");


let getProductsFromFile=(cb)=>{
    fs.readFile(dataPath,(err,content)=>{
        if(err){ return cb([]);}
         console.log(JSON.parse(content))
         cb(JSON.parse(content))
        
    })
}

module.exports=class Product{
    constructor(title,imagUrl,description,price){
        this.title=title;
        this.imagUrl=imagUrl;
        this.description=description;
        this.price=price;
    }

    save(){
        getProductsFromFile(products=>{
            //products=JSON.parse(content);
            products.push(this);
            //console.log("pp   "+JSON.stringify(products))
            fs.writeFile(dataPath,JSON.stringify(products),(err)=>{
            if(err)console.log("err ====="+err);
        })    
        })

        
        // fs.readFile(dataPath,(err,content)=>{
        // let products=[]
        // if(!err){
        //     products=JSON.parse(content);
        // }
        // products.push(this);
        // console.log("pp   "+JSON.stringify(products))
        // fs.writeFile(dataPath,JSON.stringify(products),(err)=>{
        //     if(err)console.log("err ====="+err);
        // })
    //})

    }

    static fetchAll(cb){
        
        getProductsFromFile(cb)
    }
}