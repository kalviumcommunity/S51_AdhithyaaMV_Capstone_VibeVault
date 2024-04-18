import React from 'react';
import "../App.css";
// import AppRoutes from "./AppRoutes"; // Correct import path
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className="navbar">
                
                <Link to='/login'>Login</Link>
                <a href="#">Sign-Up</a>
                <Link to='/upload'>Upload</Link>
                <div className="search-container">
                <input type="text" placeholder="Search" />
                </div>
            </div>
            
            <div id='title'>
                <div id='titlename'>Vibe Vault</div> 
                
            </div>

            <div id='moodbar'>
                <Link to='/moodpage'><button className='moodbut'>Pick Your Mood</button></Link>
            </div>

        </div>
    );
}

export default Navbar;
