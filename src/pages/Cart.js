import React, { useState } from 'react';
import CartForm from '../cart/CartForm';
import CartList from '../cart/CartList';

import style from './Cart.module.css';
import product from '../services/product';

function Cart({ cartList, setCartList, setUserInformation, userInformation }) {
  const [clearForm, setClearForm] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cartList.length === 0) {
      alert('please, choose the food for ordering');
      return;
    }
    if (Object.values(userInformation).join('').length < 20) {
      alert('please, fill the contact information');
      return;
    }

    const newOrder = {
      id: Math.round(Math.random() * 100 ** 5),
      cartList: cartList,
      userInformation: userInformation,
    };

    product.postOrder(newOrder);

    setCartList([]);
    setUserInformation({});
    setClearForm(!clearForm);

    alert('order has been received, thank you');
  };

  return (
    <div>
      <div className={style.wrapper}>
        <CartForm setUserInformation={setUserInformation} clearForm={clearForm} />

        <CartList cartList={cartList} setCartList={setCartList} />
      </div>
      <div className={style.footer}>
        <div className={style['total-price']}>
          Total Price:{' '}
          {cartList.reduce((previous, current) => {
            return current.price * current.quantity + previous;
          }, 0)}{' '}
          $
        </div>
        <button type="submit" className={style['submit-button']} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Cart;
