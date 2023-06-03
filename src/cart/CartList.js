import React from 'react';
import CartCard from '../components/CartCard';

import style from './CartList.module.css';

function CartList({ cartList, setCartList }) {
  return (
    <div className={style.window}>
      {cartList.map((item) => (
        <CartCard key={item.id} item={item} setCartList={setCartList} />
      ))}
    </div>
  );
}

export default CartList;
