import React from 'react'
import './Itemcard.css'

function Itemcard({Itemimg,Itemprice,Itemtitle, Itemplace,Itemdate}) {
  return (
    <div className='item-card-con'>
        <div className='item-img-div'>
            <img src={Itemimg} alt="Product Image"></img>
        </div>
        <div className='item-price'>
        ₹ {Itemprice}
        </div>
        <div className='item-title'>
        {Itemtitle}
        </div>
        <div className='item-place_date'>
            <p>{Itemplace}</p>
            <p>{Itemdate}</p>
        </div>
    </div>
  )
}

export default Itemcard