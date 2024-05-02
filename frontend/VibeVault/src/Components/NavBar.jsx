import React, { useState } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import playbut from '../assets/Group2.png';
import expvideo from '../assets/myvideo.mp4'

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='nav_body'>
            <div className="navbar">
                <Link className='login' to='/login'>Login</Link>
                <Link className="signup" to="/signup">Sign-Up</Link>
                <Link className='upload' to='/upload'>Upload</Link>
            </div>

            <div className="search-container">
                <input className="search" type="text" placeholder="Search" />
            </div>
            
            <div id='title'>
                <div id='titlename'>Vibe Vault</div> 
            </div>

            <div id='moodbar'>
                <Link to='/moodpage'><button className='moodbut'>Pick your Mood</button></Link>
            </div>

            <div className='about'>
                {/* Use the playbut image here */}
                <img className='playbutton' src={playbut} alt="Play button" onClick={openModal} />
            </div>

              {/* Modal */}
              {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        slfjorhgihi
                        {/* Video */}
                        <video controls>
                            <source src={expvideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;