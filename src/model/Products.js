const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ShoppingCart');

const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name : String,
    price: Number,       
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;