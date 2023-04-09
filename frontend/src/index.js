import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';

import './sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
