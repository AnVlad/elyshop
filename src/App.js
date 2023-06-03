import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [cartList, setCartList] = useState([]);
  const [userInformation, setUserInformation] = useState({});

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Header cartList={cartList} />
        </nav>
        <Routes>
          <Route path="/" element={<MainPage setCartList={setCartList} cartList={cartList} />} />
          <Route
            path="/cart"
            element={
              <Cart
                setCartList={setCartList}
                cartList={cartList}
                setUserInformation={setUserInformation}
                userInformation={userInformation}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
