var React = require('react');

var BasketBox = React.createClass({

  getInitialState: function(){
    return {code: ''};
  },

  handleVoucherChange: function(e){
    this.setState({code: e.target.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    console.log('click', e.target.value)
    //if answer is correct
    this.props.onVoucherSubmit( e.target.value )
    // otherwise can just tell them it's not
  },

  render: function(){
    var allItemsInBasket = this.props.shoppingBasket.map(function(items) {
        return (
            <div key={items.id}>
                <li>{items.product}</li>
                <input type="submit" value="x"/>
            </div>
        )
    })

    return(
      <div className="basketbox">
        <h2>Shopping Basket</h2>
        {allItemsInBasket}
        <h3>Total Cost: £{this.props.totalPriceOfBasket}</h3>
        <form className='form' onSubmit={this.handleSubmit}>
        <select id = "dropdown">
          <option>Please Select voucher</option>
          <option value="1">£5.00 off your order</option>
          <option value="2">£10.00 off when you spend over £50.00</option>
          <option value="3">£15.00 off when you have bought at least one footwear item and spent over £75.00</option>
        </select>
          <input type="text" 
                 name="voucherCode" 
                 placeholder="Voucher Code"
                 />
           <input type="submit" value="Submit"/>
        </form>
      </div>
      )
  }

});

module.exports = BasketBox;