var Product = require('../src/model/Products');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ShoppingCart');

var products = [
    new Product({
        name: "Puma",
        price : 1000
    }), 
    new Product({
        name: "Addidas",
        price : 5000
    }),
    new Product({
        name: "Addidas",
        price : 5000
    }),
    new Product({
        name: "Addidas",
        price : 5000
    }),
    new Product({
        name: "Addidas",
        price : 5000
    }),
    new Product({
        name: "Addidas",
        price : 5000
    }),
    new Product({
        name: "Addidas",
        price : 5000
    }),
    new Product({
        name: "Addidas",
        price : 5000
    }),
    new Product({
        name: "Addidas",
        price : 5000
    }),
    new Product({
        name: "Addidas",
        price : 5000
    }),
    new Product({
        name: "Addidas",
        price : 5000
    })

];

var count = 0;
for(var i=0; i<products.length; i++){
    products[i].save((err, data)=>{
        count++;
        console.log(data);
        if(count === products.length){
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}

mongoose.disconnect();