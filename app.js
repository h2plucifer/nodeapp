const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

const errorController=require('./controllers/error');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

const app=express();

app.set('views',path.join(__dirname,"views"));
app.set('view engine',"ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000,()=>console.log("listening at 3000"));