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
                <p>"Introducing Vibe Vault, 
                    a unique project designed to enhance your entertainment experience. 
                    Users simply select their current mood, 
                    and are seamlessly guided to a subsequent page where they can choose between music, 
                    movies, or web series. 
                    The platform then prompts users to specify their language preference, 
                    presenting curated options tailored to their selections. 
                    Dive into personalized entertainment with Vibe Vault and let your mood guide the way!"
                </p>
            </div>

            <div id='moodbar'>
                <Link to='/moodpage'><button className='moodbut'>Pick Your Mood</button></Link>
            </div>

        </div>
    );
}

export default Navbar;
