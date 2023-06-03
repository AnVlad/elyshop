import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

function Header({ cartList }) {
  const quantityInList = cartList.reduce((prev, current) => current.quantity + prev, 0);
  return (
    <div className={style.header}>
      <Link to="/" className={`${style.shop} ${style.link}`}>
        ElyShop
      </Link>
      <Link to="/cart" className={`${style.cart} ${style.link}`}>
        Shopping Cart
        {quantityInList > 0 ? <span className={style.notification}>{quantityInList}</span> : ''}
      </Link>
    </div>
  );
}

export default Header;
