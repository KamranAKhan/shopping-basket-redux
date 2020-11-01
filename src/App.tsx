import React from 'react';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import AboutUs from './components/pages/AboutUs/AboutUs';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Products from './components/pages/Products/Products';
import Home from './components/pages/Home/Home';
import ProductDetails from './components/pages/ProductDetails/ProductDetails';

import Cart from './components/pages/Cart/Cart';
import Checkout from './components/pages/Checkout/Checkout';

import PageNotFound from './components/pages/PageNotFound/PageNotFound';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:productId" element={<ProductDetails />}></Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
