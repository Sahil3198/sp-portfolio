import React, { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../../pages/Router';
import { ThemeContext } from '../../context/ThemeContext';

const App = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="app" id={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
