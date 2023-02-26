import React from 'react';
import './Cart.css';
import Emptycart from '../Assets/img/emptycart.webp'
import {Link} from "react-router-dom";

function CartItem({ cartList, removeFromCart }) {
  console.log(cartList);
  return (
    <div>
      
        {
          cartList.length === 0 ?
            (<div className='emptycart'>
              <img src={Emptycart} alt=""></img>
              <p>Your SwapMart Cart is Empty!</p>
              <p>Add items to it now.</p>
              <Link to="/"><button>Shop now</button></Link>
            </div>) : (
              <div className='cart_content1'>
              <div className='Cart_header'>
                <div className='Cart_header_content1'>
                  <h4>Shopping Cart</h4>
                  <span>{cartList.length} Items</span>
                </div>
                <hr />
                <div className='Cart_content_part1'>
                  <span>PRODUCT DETAILS</span>
                  <span className='Cart_price'>PRICE</span>
                </div>{
                  cartList.map((item, index) => {
                    return (
                      <div className='Cart_content_part2'>
                        <span>
                          <div className='Cart_content_Prod_details'>
                            <img src={item.Itemimg} alt=""></img>
                            <div className='Cart_content_Prod_details_1'>
                              <p className='Cart_title'>{item.Itemtitle}</p>
                              <p className='Cart_instock'>In Stock</p>
                              <p className='Cart_shipping'>Eligible for Free Shipping </p>
                              <button onClick={() => removeFromCart(item)}>Delete</button>
                            </div>
                          </div>
                        </span>
                        <span>₹{
                     Math.round(item.Itemprice-(item.Itemprice*(item.discount/100)))
                    }</span>
                      </div>

                    )
                  })}
              </div>
              <div className='Cart_Summarypage'>
            <div className="cart_Summary">
              <h4>Order Summary</h4>
              <hr/>
            </div>
            <div className='cart_Summary_item'>
            <span><b>ITEMS </b> </span>
            <span><b>Price</b></span>
            </div>
            {
                      cartList.map((item, index) => {
                        return (
            <div className='cart_Summary_item_detail'>
              <span>{item.Itemtitle}</span>
              <span>₹{
                     Math.round(item.Itemprice-(item.Itemprice*(item.discount/100)))}</span>
            </div>)})}
            <span><hr/></span>
            <div className='cart_subtotal'> 
              <span>SubTotal</span>
              <span>₹ {cartList.reduce((acc, item) => acc + Number(Math.round(item.Itemprice-(item.Itemprice*(item.discount/100)))), 0)}</span>
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
              <span>₹{cartList.reduce((acc, item) => acc + Number(Math.round(item.Itemprice-(item.Itemprice*(item.discount/100)))), 0)}</span>
            </div>
          </div>
            
              </div>
            )}



      
    </div>
  )
}

export default CartItem;