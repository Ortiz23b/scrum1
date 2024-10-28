import React from 'react';
import './Navigation.css';


const Navigation = () => {
  return (
    <nav className="navigation">
      <h1>Mi Tienda</h1>
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#cart">Carrito</a></li>
        <li><a href="#checkout">Pagar</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
