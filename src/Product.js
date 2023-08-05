import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({title,price,image,rating}) {
  const[{basket},dispatch]=useStateValue();

  const addToBasket=()=>{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });

  };
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

        <button onClick={addToBasket}>Add to Basket</button>
      
    </div>
  )
}

export default Product
