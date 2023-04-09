import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../Components/Error/Error';
import RootLayout from './Root/Root';
import Home from './Home/Home';
import About from './About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default router;