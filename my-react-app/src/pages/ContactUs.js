import React from 'react';

function ContactUs() {
  return (
    <div style={{ backgroundColor: '#FFF9DB', minHeight: '100vh' }}>
      <div
        className="page-content"
        style={{
          padding: '1rem',
          textAlign: 'center' // ✅ centers text horizontally
        }}
      >
        <h1>Contáctenos</h1>
        <h3>Número de teléfono</h3>
        <p>975196909</p>
        <h3>Dirección</h3>
        <p>Flora Tristan 718 Urbanización Covima</p>
        <p>La Molina</p>
      </div>
    </div>
  );
}

export default ContactUs;

