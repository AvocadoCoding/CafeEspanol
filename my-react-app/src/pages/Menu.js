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
        border: '5px solid', // width of the border
        borderImage: 'linear-gradient(to right, #333, #ccc) 1', // gradient border
        borderRadius: '15px', // rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // subtle shadow for depth
         }}>
      <h2>Menú</h2>
        <p></p>
        <p>Caldo de gallina</p>
        <p>Pollo broaster</p>
        <p>Salchi broaster</p>
        <p>Salchipapa</p>
        <p>Bebidas calientes</p>
        <p>Gaseosas</p>
        {/* Add more home page content here */}
      </div>
    </div>
  );
}

export default Menu;