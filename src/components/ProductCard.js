import React from 'react';
import style from './ProductCard.module.css';

function ProductCard({ item, setCartList }) {
  let name = item?.name && item.name.length > 60 ? `${item.name.slice(0, 50)} . . .` : item.name;

  const handleClick = () => {
    setCartList((previousItems) => {
      const itemInTheList = previousItems.find((previousItem) => previousItem.id === item.id);
      if (itemInTheList) {
        return [
          ...previousItems.filter((previousItem) => previousItem.id !== item.id),
          { ...itemInTheList, quantity: itemInTheList.quantity + 1 },
        ];
      }
      return [...previousItems, { ...item, quantity: 1 }];
    });
  };

  return (
    <div className={style.card}>
      <img className={style['card-image']} src={item.image} alt={item.name}></img>
      <div className={style['card-name']}>{name}</div>

      <div className={style['button-wrap']}>
        <div className={style['card-price']}>price: {item.price} $</div>
        <button className={style['card-button']} type="button" onClick={handleClick}>
          add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
