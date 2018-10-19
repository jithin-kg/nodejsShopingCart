const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/ShoppingCart');

const Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    email : String,
    password : String,
    pwdcofm : String
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
}

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync (password, this.password);
}

const User = mongoose.model('User',userSchema);

module.exports = User;