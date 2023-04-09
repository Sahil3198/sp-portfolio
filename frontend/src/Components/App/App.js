import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { scrollSpy } from 'react-scroll';
import router from '../../pages/Router';
function App() {

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
