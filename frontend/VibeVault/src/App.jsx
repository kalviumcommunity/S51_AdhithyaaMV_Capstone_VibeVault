import React from 'react';
import "./App.css"

function Navbar() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Vibe Vault</h1>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
        <div className="search-container">
          <input type="text" placeholder="Search.." />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
