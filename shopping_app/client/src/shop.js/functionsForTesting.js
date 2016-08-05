var Shop = function( name ){
  this.name = name;
}


Shop.prototype = {

 listAllItems: function(items){
   var allItems = []
   for(var item of this.state.items){
     allItems.push(item)
   }

   return allItems
 },

 filterCategory: function(gender){
   var filteredCategory = []
   for(var item of this.state.items) {
     if(item.gender === gender) {
       filteredCategory.push(item)
     }
     
   }
   return filteredCategory
 },

 inStock: function(){
   var newInStockItems = this.state.inStockItems
   for(var item of this.state.items){
     if(item.quantity > 0 ){
       newInStockItems.push(item);
     }
     
   }
   return newInStockItems;


   
 },

 addItemToBasket: function(itemId){

   var shoppingBasket = this.state.shoppingBasket
   for(var item of this.state.newStockItems){
     if(item.id === itemId ){
       item.quantity -= 1
       shoppingBasket.push(item)
     }
   }
   this.setState({ shoppingBasket: shoppingBasket });
 },

 removeItemFromBasket: function(itemId){
   var updatedItems = this.state.items
   for(var item of shoppingBasket){
     if(item.id === itemId){
       item.quantity += 1
       updatedItems.push(item)
     }
   }
   this.setState({ items: updatedItems })
 },

 totalPriceOfBasket: function(shoppingBasket){
   var totalCost = 0
   for(var item of this.state.shoppingBasket){
     totalCost += item.price
   }

   return totalCost
 },

 handleVoucherSubmit: function(vouchers) {

   var validVoucher = false;
   for(var code of this.state.vouchers){
     if(code === vouchers.code){
       return validVoucher = true;
     }
   }
 },

 validVoucher: function(){
   validVoucher = false
   for(var code of this.state.voucherData){
     if( code === this.state.customerData.code){
       validVoucher = true;
     }
     return validVoucher
   }
 },

 voucher1: function(validVoucher){
   var newTotal = 0
   newTotal = (this.state.totalCost - 5)
   return newTotal

 },

 voucher2: function(validVoucher){
   newCost = 0
   if(this.state.totalCost > 50){
     newCost = this.state.totalCost - 10
   }
   return totalCost
   this.setState({ totalCost: totalCost })
 },

 voucher3: function(validVoucher){
   newCost = this.state.totalCost
   for(var item of this.state.shoppingBasket){
     if(item.category === "Footwear"){
       if(this.state.totalCost > 75){
         newCost = newCost - 15
       }
     }
     return newCost
   }
 }

},



module.exports = Shop;