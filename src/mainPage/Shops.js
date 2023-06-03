import React from 'react';
import style from './Shops.module.css';

function Shops({ setFilter, children, chosenShop }) {
  const handleClick = () => {
    setFilter(children);
  };

  return (
    <button
      className={style['shop-button']}
      onClick={handleClick}
      type="button"
      disabled={chosenShop.length > 0 && chosenShop !== children ? true : false}>
      {children}
    </button>
  );
}

export default Shops;
