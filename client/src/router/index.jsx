import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { FullWithLayout } from '../hocs/layouts/FullWithLayout';
import AuthLayout from '../hocs/layouts/AuthLayout';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import AddProduct from '../pages/AddProducts';
import NotFound from '../pages/NotFound';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FullWithLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="userprofile/addproduct" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
