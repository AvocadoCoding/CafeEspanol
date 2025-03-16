import React from 'react';
import locationImage from '../assets/images/Location.PNG';
import paymentImage from '../assets/images/Payment.JPG';

function Takeaway() {
  return (
    <div style={{ backgroundColor: '#FFF9DB', minHeight: '100vh' }}>
      <div className="page-content" style={{ padding: '1rem' }}>
        <h2 style={{ textAlign: 'center' }}>Entrega desde nuestro restaurante</h2>
        <img
          src={locationImage}
          alt="Location"
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '1rem auto' }}
        />
      </div>
      <div className="page-content" style={{ padding: '1rem' }}>
        <h2 style={{ textAlign: 'center' }}>Aceptamos las siguientes opciones de pago</h2>
        <img
          src={paymentImage}
          alt="PaymentOptions"
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '1rem auto' }}
        />
      </div>
    </div>
  );
}

export default Takeaway;
