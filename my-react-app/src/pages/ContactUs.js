import React from 'react';

function ContactUs() {
  // Build number dynamically to prevent scraping
  const phonePart1 = "975";
  const phonePart2 = "196";
  const phonePart3 = "909";
  const phoneDisplay = `${phonePart1} ${phonePart2} ${phonePart3}`;
  const phoneDigits = `${phonePart1}${phonePart2}${phonePart3}`; // +51 for Peru (optional)

  // Click handler: only creates the tel: link when clicked
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneDigits}`;
  };

  const linkStyle = {
    background: 'none',
    border: 'none',
    color: '#000',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '1.2rem'
  };

  return (
    <div style={{ backgroundColor: '#FFF9DB', minHeight: '100vh' }}>
      <div
        className="page-content"
        style={{
          padding: '1rem',
          textAlign: 'center'
        }}
      >
        <h1>Contáctenos</h1>

        <h3>Número de teléfono</h3>
        <p>
          <button
            type="button"
            onClick={handlePhoneClick}
            style={linkStyle}
            aria-label={`Llamar al ${phoneDisplay}`}
          >
            {phoneDisplay}
          </button>
        </p>

        <h3>Dirección</h3>
        <p>Flora Tristán 718 Urbanización Covima</p>
        <p>La Molina</p>
      </div>
    </div>
  );
}

export default ContactUs;


