import React from 'react';
import "../App.css";
// import AppRoutes from "./AppRoutes";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='nav_body'>
            <div className="navbar">
                
                <Link className='login' to='/login'>Login</Link>
            
                <a  className="signup" href="#">Sign-Up</a>
                
                <Link className='upload' to='/upload'>Upload</Link>
                
                <div className="search-container">
                
                <input className="search" type="text" placeholder="Search" />
                
                </div>
            </div>
            
            <div id='title'>
                <div id='titlename'>Vibe Vault</div> 
            </div>

            <div id='moodbar'>
                <Link to='/moodpage'><button className='moodbut'>Pick your Mood</button></Link>
            </div>

            <div className='about'>
                ABOUT
            </div>

        </div>
    );
}

export default Navbar;
