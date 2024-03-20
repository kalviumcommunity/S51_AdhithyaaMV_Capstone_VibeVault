import React from 'react';
import "../App.css";
// import AppRoutes from "./AppRoutes"; // Correct import path
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <a href="#">Home</a>
                <a href="#">Log-In</a>
                <a href="#">Sign-Up</a>
                <Link to='/upload'>Upload</Link>
                <div className="search-container">
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <h1>HÅnG IN</h1>
        </div>
    );
}

export default Navbar;
