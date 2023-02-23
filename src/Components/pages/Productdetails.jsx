import React from 'react';
import  {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import './Productdetails.css'

function Productdetails({addTocart}) {
  let { id } = useParams();
     const [productDetails, setProductDetails] = useState('');
     useEffect (() => {
      axios.get(`https://fir-react-fd4d2-default-rtdb.asia-southeast1.firebasedatabase.app/item-list/${id}.json`)
      .then(res => {
        // console.log(res.data)
        setProductDetails(res.data)
      } )
    })

    // const[totalprice, setTotalprice]=useState('');
    // const[discountprice, setDiscountprice]=useState('');
    // setTotalprice=productDetails.Itemprice.split("$");
    // let discountprice=productDetails.Itemprice-(productDetails.Itemprice*(productDetails.discount/100));

  return (
    <Container>
    {
      productDetails=== ' '
      ? 'Loading...'
      : (
          <Row className='product-detail-row'>
            <Col className='product-detail-col-l'>
              <img className='product-detail_img' src={productDetails.Itemimg} alt="" />
            </Col>
            <Col className='product-detail-col-r'>
              <h1>{productDetails.Itemtitle}</h1>
              {/* <p className='product-detail_desc'>{productDetails.Itemtitle}</p> */}

              <div className='product-detail_price'>
                <div className="product-detail_price_main">
                  <p className='product-detail_price_current'>
                    ₹ {
                     productDetails.Itemprice-(productDetails.Itemprice*(productDetails.discount/100))
                    }
                  </p>
                  <p className='product-detail_price_original'>
                    ₹ {productDetails.Itemprice}
                  </p>
                  <p className='product-detail_price_discount'>
                  {productDetails.discount}% off
                  </p>
                </div>
                <div className="product-detail_price_sub">
                  <p>
                    inclusive of all taxes
                  </p>
                </div>
              </div>

              <div className='product-detail_features'>
                <ul>
    
                  <li>
                  {productDetails.Description1}
                  </li>
                  <li>
                  {productDetails.Description2}
                  </li>
                  <li>
                  {productDetails.Description3}
                    </li>
                  <li>
                  {productDetails.Description4}
                    </li>
                  <li>
                  {productDetails.Description5}
                   </li>
                </ul>
              </div>

              <div className='product-detail_btns'>
                <button className='product-detail_btn product-detail_btn_buy'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                  Buy Now
                </button>
                <button className='product-detail_btn product-detail_btn_add' onClick={()=>addTocart(productDetails)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                  Add to Cart 
                </button>
              </div>
            </Col>
          </Row>
        )
    }
  </Container>
  )
}
export default Productdetails;