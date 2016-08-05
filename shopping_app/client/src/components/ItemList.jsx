var React = require("react");
var ItemList = React.createClass ({


  addItemToBasket: function(e) {
    console.log("button clicked", e.target.value)
    this.props.addItemToBasket(e.target.value);
  },


  render: function() {



    var allItems = this.props.filteredCategory.map(function(items) {
      return (
        <div className="itemList"
        key={items.id}>

        <h4>{items.product}</h4>
        <h5>£{items.price.toFixed(2)}</h5>
        <img src={items.image} height="70" width="70"/>
        <button onClick={this.addItemToBasket} value={items.id}>+ Basket</button>
        </div>
        )
    }.bind(this))
    return (
      <div>
      <h3>{this.props.gender}</h3>
      {allItems}
      </div>
      )
  }
});
module.exports = ItemList;

