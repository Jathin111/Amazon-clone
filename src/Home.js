import React from 'react';
import "./Home.css";
import Product from './Product';

export default function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home_image' src='https://images-na.ssl-images-amazon.com/images/I/41G6zxxNH5L.png'/>
        

        <div className='Product__row'>
          <Product
            title="Haunting Adeline"
            price={3.99}
            image="https://assets.mycast.io/posters/haunting-adeline-fan-casting-poster-235187-large.jpg?1662377465"
            rating={5}/>
          <Product
            title="It Ends With Us by Collen Hoover"
            price={28.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91OT29EvAXL.jpg"
            rating={4} />
        </div>
        <div className='Product__row'>
          <Product
            title="TITAN Black Analog Watch"
            price={120}
            image="https://n4.sdlcdn.com/imgs/b/x/j/TITAN-Black-Analog-Watch-SDL941104674-1-dd671.jpg"
            rating={5}/>
          <Product
            title="Original Brand Men Perfume"
            price={44.79}
            image="https://i1.wp.com/product-best.com/wp-content/uploads/2020/10/H472fcc84bba4403aa47a6fd4d124591bt.jpg?fit=900,900&ssl=1"
            rating={3}/>
          <Product
            title="iQOO Z3 5G with 120Hz display..."
            price={123}
            image="https://static.hub.91mobiles.com/wp-content/uploads/2021/03/iQOO-Z3.jpg"
            rating={4}
            />
        </div>
        <div className='Product__row'>
          <Product
            title="Mi LED Smart TV 4A 108 cm (43)"
            price={428.65}
            image="https://starelectronicsservice.com/wp-content/uploads/2018/10/micromax-40-inches-Led-services-in-Madurai.png"
            rating={4}/>
            <Product
              title="Men's Engraved Bracelet"
              price={46}
              image="http://cdn.notonthehighstreet.com/fs/14/3c/034e-cac0-453d-967b-bafbf34c9610/original_men-s-engraved-message-bracelet.jpg"
              rating={5}/>
            <Product
              title="Men's Sports Wear Shoes"
              price={99.56}
              image="https://n1.sdlcdn.com/imgs/g/2/d/Puma-Men-Essential-Runner-IDP-SDL809099655-2-da162.jpeg"
              rating={5}/>
              
        </div>

      </div>
    </div>
  )
}
