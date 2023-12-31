import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export const FullWithLayout = () => {
  return (
    <div className="bg-[#F7FAFC]">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
