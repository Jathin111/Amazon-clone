import React from 'react';
import './Product.css';

function Product({title,price,image,rating}) {
  return (
    <div className='Product'>
        <div className='Product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
              {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>
              ))}
              
            </div>
            
        </div>
        <img src={image}/>

        <button>Add to Basket</button>
      
    </div>
  )
}

export default Product
