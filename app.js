const express = require('express');
const path = require('path');
const chalk = require('chalk');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');


var Product = require('./src/model/Products');

const usersRoute = require('./src/routes/users');



const app = new express();

mongoose.connect('mongodb://localhost:27017/ShoppingCart');

console.log(mongoose.connection.readyState);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())//json parser

app.use(express.static(path.join(__dirname,'public') ));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/users',usersRoute);

app.get('/', (req,res)=>{
    Product.find()
    .then((data)=> {
           // console.log("from app.js "+data);
            res.render('index',{data});
            
        
    })
    
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000,()=>{
    console.log("litening on port "+ chalk.green('3000'));

})
