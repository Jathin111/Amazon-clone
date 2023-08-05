import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
          <img className='checkout__ad' src='https://libertv.com/wp-content/uploads/2018/03/BT-Category-Horizontal-Banner-Ad-1024x134.jpg'/>
          <div><h2 className='checkout__title'>Your Shopping Basket</h2></div>
        </div>
        <div className='checkout__right'>
          <Subtotal/>
          <h2>The Subtotal will go here</h2>
        </div>

    </div>
  )
}

export default Checkout

