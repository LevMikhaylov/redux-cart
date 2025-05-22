import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './CartPack/Cart.jsx';
import { Provider } from 'react-redux';
import { store } from './strore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Cart />
  </Provider>
);