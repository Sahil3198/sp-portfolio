import { Outlet } from 'react-router-dom';
import MainNavigation from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function RootLayout() {

  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default RootLayout;