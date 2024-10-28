import React, { useState } from 'react';
import Cart from './components/Cart';
import Navigation from './components/Navigation';
import TempPayment from './components/TempPayment';
import ProductSelection from './components/ProductSelection';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Navigation />
      <ProductSelection onAddToCart={onAddToCart} />
      <Cart items={cartItems} onRemoveFromCart={onRemoveFromCart} />
      <TempPayment total={totalPrice} />
    </div>
  );
}

export default App;
