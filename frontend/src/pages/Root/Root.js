import { Outlet } from 'react-router-dom';
import MainNavigation from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
function RootLayout() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="root">
      <MainNavigation />
      <main className="main-section" id={theme}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;