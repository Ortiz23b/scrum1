import React from 'react';
import './Cart.css';

const Cart = ({ items, onRemoveFromCart }) => {
  const totalItems = items.length;
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => onRemoveFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total de productos: {totalItems}</p>
        <p>Precio Total: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
