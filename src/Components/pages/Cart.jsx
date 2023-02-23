import React from 'react';
import './Cart.css';
 

function CartItem({cartList}) {
console.log(cartList);
  return (
    <div>
      <div className='cart_content1'>
    <div className='Cart_header'>
      <div className='Cart_header_content1'>
      <h4>Shopping Cart</h4>
      {/* <p>{cartList.length}Items</p> */}
      <span>1 Items</span>
      </div>
      <hr/>
      <div className='Cart_content_part1'>
        <span>PRODUCT DETAILS</span>
        <span className='Cart_price'>PRICE</span>
        </div>
      <div className='Cart_content_part2'>
      <span>
        <div className='Cart_content_Prod_details'>
        <img src="https://m.media-amazon.com/images/I/51eTOVYRbTL._AC_SX296_SY426_FMwebp_QL65_.jpg" alt=""></img>
        <div className='Cart_content_Prod_details_1'>
          <p className='Cart_title'>LG LAPTOP 128 GB Black</p>
          <p className='Cart_instock'>In Stock</p>
          <p className='Cart_shipping'>Eligible for Free Shipping </p>
          <button>Delete</button>
        </div>
        </div>
        </span>
        <span>₹14000</span> 
      </div>
        
      </div>
      <div className='Cart_Summarypage'>
      <div className="cart_Summary">
        <h4>Order Summary</h4>
        <hr/>
      </div>
      <div className='cart_Summary_item'>
      <span>ITEMS  </span>
      <span>Price Details</span>
      </div>
      <div className='cart_Summary_item'>
        <span>LG LAPTOP 128 GB Black</span>
        <span>₹14000</span>
      </div>
      <span><hr/></span>
      <div className='cart_subtotal'>
        
        <span>SubTotal</span>
        <span>₹14000</span>
      </div>
      <div className='cart_subtotal'>
        
        <span>Shipping & Charges</span>
        <span>₹0</span>
      </div>
      <div className='cart_subtotal'>
        <span>Taxes</span>
        <span>₹0</span>
      </div>
      <span><hr/></span>
      <div className='cart_subtotal'>
        <span>TOTAL COST</span>
        <span>₹14000</span>
      </div>
    </div>
    </div>

    </div>
  )}

export default CartItem;