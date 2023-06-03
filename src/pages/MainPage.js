import React, { useEffect, useState } from 'react';
import Shops from '../mainPage/Shops';
import ProductCard from '../components/ProductCard';
import style from './MainPage.module.css';
import product from '../services/product';

function MainPage({ setCartList, cartList }) {
  const [menuList, setMenuList] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredMenuList, setFilteredMenuList] = useState([]);
  const [chosenShop, setChosenShop] = useState('');

  useEffect(() => {
    async function gettingList() {
      const list = await product.getList();
      setMenuList(list);
    }
    gettingList();
  }, []);

  useEffect(() => {
    if (cartList.length > 0) {
      setChosenShop(cartList[0].restaurant);
    }
  }, [cartList]);

  useEffect(() => {
    if (menuList.length === 0) return;

    setFilter(chosenShop.length > 0 ? chosenShop : menuList[0].restaurant);
  }, [chosenShop, menuList]);

  useEffect(() => {
    setFilteredMenuList(menuList.filter((card) => card.restaurant === filter));
  }, [filter]);

  const shops = new Set(menuList.map((card) => card.restaurant));

  return (
    <div className={style.wrapper}>
      <div className={style['shop-list']}>
        <h1>Shops</h1>
        {[...shops].map((shop) => (
          <Shops key={shop} setFilter={setFilter} chosenShop={chosenShop}>
            {shop}
          </Shops>
        ))}
      </div>
      <div className={style.cards}>
        <div className={style['cards-list']}>
          {filteredMenuList.map((item) => {
            return <ProductCard key={item.id} item={item} setCartList={setCartList} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
