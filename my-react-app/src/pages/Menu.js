import React from 'react';


function Menu() {
  return (
    <div style={{ backgroundColor: '#FFF9DB', minHeight: '100vh' }}>
      <div style={{ height: '2rem', backgroundColor: '#FFF9DB' }}></div>
      <div className="page-content" style={{ 
        backgroundColor: '#f5c943', 
        padding: '2rem', 
        textAlign: 'center', 
        maxWidth: '400px', 
        margin: '0 auto',
        border: '5px solid #777', // Monotone grey border
        borderRadius: '15px', // rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // subtle shadow for depth
         }}>
      <h1>Menú</h1>
        <p></p>
        <h2>Caldo de gallina</h2>
        <h2>Pollo broaster</h2>
        <h2>Salchi broaster</h2>
        <h2>Salchipapa</h2>
        <h2>Bebidas calientes</h2>
        <h2>Gaseosas</h2>
        {/* Add more home page content here */}
      </div>
    </div>
  );
}

export default Menu;