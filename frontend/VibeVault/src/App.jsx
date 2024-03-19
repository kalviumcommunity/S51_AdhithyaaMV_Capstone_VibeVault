import React from 'react';
import "./App.css"

function Navbar() {
  return (
    <div>
      
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
        <div className="search-container">
          <input type="text" placeholder="Search" />
        </div>
       

      </div>
      <h1>VIBE VAULT</h1>
    </div>
  );
}

export default Navbar;
