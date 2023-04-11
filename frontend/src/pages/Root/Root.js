import { Outlet } from 'react-router-dom';
import MainNavigation from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useState } from 'react';

function RootLayout() {
  return (
    <div className="root">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default RootLayout;