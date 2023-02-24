import React from 'react'
import './Itemcard.css'

function Itemcard({Itemimg,Itemprice,Itemtitle, Itemplace,Itemdate,discount}) {
  return (
    <div className='item-card-con'>
        <div className='item-img-div'>
            <img src={Itemimg} alt="Product"/>
        </div>
        <div className='item-price'>
        <span>₹</span> {Math.round(Itemprice-(Itemprice*(discount/100)))}
        <span className='Strike_price'>₹{Itemprice}</span>
        <span className='Strike_price_discount'> {discount}% off</span>
        </div>
        <div className='item-title'>
        {Itemtitle}
        </div>
        <div className='item-place_date'>
            <span>{Itemplace}</span>
            <span>{Itemdate}</span>
        </div>
    </div>
  )
}

export default Itemcard