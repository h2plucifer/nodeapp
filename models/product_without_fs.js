const products=[];

module.exports=class Product{
    constructor(t){
        this.title=t;
        console.log(t)
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}