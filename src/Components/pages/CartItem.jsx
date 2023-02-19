import React from 'react';
import './Cart.css';
import { Col, Row } from 'react-bootstrap'; 

function CartItem({cartList}) {

  return (
    <div>
      <div className='cart_content1'>
    <div className='Cart_header'>
      <div>
      <h2>Shopping Cart</h2>
      <p>{cartList.length}Items</p>
      </div>
      <hr/>
      <Row>
        <Col>Product Details</Col>
        <Col>Price</Col>
        </Row>
      </div>
      <div className="cart_Summary">
        <h2>Order Summary</h2>
      </div>
    </div>

    </div>
  )}

export default CartItem;