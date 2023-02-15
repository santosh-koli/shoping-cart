import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartContext from './context/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContext>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartContext>
);


