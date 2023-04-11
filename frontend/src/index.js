import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './context/ThemeContext';
import './sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
