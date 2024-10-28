import React from 'react';
import './TempPayment.css';

const TempPayment = ({ total }) => {
  return (
    <div className="payment">
      <h2>Proceso de Pago</h2>
      <p>Total a pagar: ${total.toFixed(2)}</p>
      <button onClick={() => alert(`Se procesará el pago de $${total.toFixed(2)}`)}>
        Pagar Ahora
      </button>
    </div>
  );
};

export default TempPayment;
