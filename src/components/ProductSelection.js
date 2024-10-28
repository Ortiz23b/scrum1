import React from 'react';

const ProductSelection = ({ onAddToCart }) => {
  const products = [
    { id: 1, name: 'Producto A', price: 9.99 },
    { id: 2, name: 'Producto B', price: 19.99 },
    // Otros productos
  ];

  return (
    <div className="product-selection">
      <h2>Selecciona tus Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>${product.price.toFixed(2)}</span>
            <button onClick={() => onAddToCart(product)}>Añadir al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSelection;
