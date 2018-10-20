module.exports = function Cart(cart){
    this.items = cart.items || {};
    this.totlQuantity = cart.totlQuantity || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.addItem = function(item, id){
        var storedItem =  this.items[id];
        if(!storedItem){
            storedItem = this.items[id] = {item : item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totlQuantity++;
        this.totalPrice += storedItem.price;
    }
    this.generateArray = function(){
        var arr = [];
        for(var i in  this.items){
            arr.push(this.items[i]);
        }
        return arr;
    }

};