import React from 'react';
import style from './CartCard.module.css';

function CartCard({ item, setCartList }) {
  let name = item?.name && item.name.length > 60 ? `${item.name.slice(0, 50)} . . .` : item.name;

  const handleIncreasingQuantityClick = () => {
    const newItem = {
      ...item,
      quantity: item.quantity + 1,
    };

    setCartList((previousList) => {
      return [
        ...previousList.map((previousItem) =>
          previousItem.id !== newItem.id ? previousItem : newItem,
        ),
      ];
    });
  };

  const handleDecreasingQuantityClick = () => {
    const newItem = {
      ...item,
      quantity: item.quantity - 1,
    };

    setCartList((previousList) => {
      if (item.quantity === 1) {
        return [...previousList.filter((previousItem) => previousItem.id !== item.id)];
      }
      return [
        ...previousList.map((previousItem) =>
          previousItem.id !== newItem.id ? previousItem : newItem,
        ),
      ];
    });
  };

  return (
    <div className={style['cart-card']}>
      <img src={item.image} className={style.image} alt={style.name} />
      <div className={style.information}>
        <div className={style.name}>{name}</div>
        <div className={style.price}>price: {item.price} $</div>
        <div className={style.quantity}>
          <button type="button" className={style.button} onClick={handleDecreasingQuantityClick}>
            -
          </button>
          <div className={style['quantity-number']}>{item.quantity}</div>
          <button type="button" className={style.button} onClick={handleIncreasingQuantityClick}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
