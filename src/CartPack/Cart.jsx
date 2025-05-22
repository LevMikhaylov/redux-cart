import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartCSS/CartCSS.css'
function Cart(){
  let  items = useSelector(state => state);
  let dispatch = useDispatch();

  let handleAdd = () => {
    let title = prompt('Введите название товара:');
    if (title) {
      dispatch({ type: 'ADD_ITEM', payload: title });
    }
  };

  return (
    <div className="App">
      <h1>Корзина товаров</h1>
      <button onClick={handleAdd}>Добавить товар</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} — {item.count}
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })}>-</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;