var React = require('react');
var ItemList = require('../components/ItemList.jsx');
var BasketBox = require('../components/BasketBox.jsx');
var NavBar = require('../components/NavBar.jsx')

var itemData = require('../ItemData.js');
var voucherData = require('../VoucherData.js');

var ShopBox = React.createClass({

  getInitialState: function(){

    return{ items: itemData, 
            inStockItems: [],
            shoppingBasket: [], 
            vouchers: voucherData
          }
        },

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
          for(var item of this.inStock()){
              if(item.id === itemId ){
                item.quantity -= 1
                shoppingBasket.push(item)
              }
          }
          this.setState({ shoppingBasket: shoppingBasket });
        },

  // removeItemFromBasket: function(itemId){
  //   var updatedItems = this.state.items
  //   for(var item of shoppingBasket){
  //     if(item.id === itemId){
  //       item.quantity += 1
  //       updatedItems.push(item)
  //     }
  //   }
  //   this.setState({ items: updatedItems })
  // },

  totalPriceOfBasket: function(shoppingBasket){
    var totalCost = 0
    for(var item of this.state.shoppingBasket){
      totalCost += item.price
    }
    return totalCost
  },

  // handleVoucherSubmit: function(vouchers) {
  //   console.log('we got the code', code)
  //   var validVoucher = false;
  //   for(var code of this.state.vouchers){
  //     if(code === vouchers.code){
  //       return validVoucher = true;
  //     }
  //   }
  // },

  // validVoucher: function(customerData){
  //   validVoucher = false
  //   for(var code of this.state.voucherData){
  //     if( code === this.state.customerData.code){
  //       validVoucher = true;
  //     }
  //     return validVoucher
  //   }
  // },

  // voucher1: function(validVoucher){
  //   var newTotal = 0
  //   newTotal = (this.state.totalCost - 5)
  //   return newTotal

  // },

  // voucher2: function(validVoucher){
  //   newCost = 0
  //   if(this.state.totalCost > 50){
  //     newCost = this.state.totalCost - 10
  //   }
  //   return totalCost
  //   this.setState({ totalCost: totalCost })
  // },

  // voucher3: function(validVoucher){
  //   newCost = this.state.totalCost
  //   for(var item of this.state.shoppingBasket){
  //     if(item.category === "Footwear"){
  //       if(this.state.totalCost > 75){
  //         newCost = newCost - 15
  //       }
  //     }
  //     return newCost
  //   }
  // }

// },



render: function(){

  return (
    <div className="shopBox">
    <h1>DELIOTTE.CLOTHING</h1>
    <NavBar 
        // filteredCategory={this.filterCategory(this.state.items)}
        />
        <ItemList 
        filteredCategory={this.filterCategory('Mens')}
        addItemToBasket={this.addItemToBasket}
        />
        <ItemList
        filteredCategory={this.filterCategory('Womans')}
        addItemToBasket={this.addItemToBasket}
        />
        <BasketBox
        shoppingBasket={this.state.shoppingBasket}
        totalPriceOfBasket ={this.totalPriceOfBasket(this.state.shoppingBasket)}
        onVoucherSubmit={ this.handleVoucherSubmit }
        />
        </div>
        )
}
})

module.exports = ShopBox;

