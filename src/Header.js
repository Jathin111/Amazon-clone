import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
       <Link to="/Home">
       <img className='header__logo' src='https://www.esyon.de/wp-content/uploads/2016/11/Amazon-Logo-wei%C3%9F.png'>
          
          </img>
       </Link>
      
      
     
      <div className='header-search'><input className='header-sectionInput' type='text'/>
        

      </div>
      <SearchIcon/>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>Sign In</span>

        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& orders</span>

          
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
          
        </div>
        <div className='header__optionBasket'>
          
        </div>
      </div>
      
      
    </div>
  )
}

export default Header
