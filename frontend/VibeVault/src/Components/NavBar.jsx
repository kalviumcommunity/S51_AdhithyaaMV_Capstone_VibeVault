import React, { useState, useEffect } from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';
import playbut from '../assets/Group2.png';
import expvideo from '../assets/myvideo.mp4';
import VibeVaultGemini from "./VibeVaultGemini";

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentQuote, setCurrentQuote] = useState('');
    const navigate = useNavigate();

    const quotes = [
        "Movies and music are universal languages that speak to the heart without boundaries",
        "In the symphony of life, movies provide the visuals while music sets the tone",
        "Movies capture moments, but music captures emotions",
        "A good film entertains, but a great film and its music resonate long after the credits roll",
        "Movies tell stories, but music lets souls talk",
        "In the reel of life, music is the soundtrack that makes every scene memorable",
        "Movies and music are the two art forms with one profound impact",
        "The magic of movies is amplified by the harmony of music",
        "In the silence of a scene, music speaks volumes",
        "Movies are the canvas, music is the brushstrokes that color the experience",
        "Music can change the world because it can change people",
        "Movies are like therapy for me",
        "Music is the divine way to tell beautiful, poetic things to the heart",
        "Movies are the memories of our lifetime. We need to keep them alive",
        "Music is the soundtrack way to escape reality",
        "Movies are the greatest way to escape reality",
        "Movies are a fad; audiences really want to see live actors on a stage",
        "Music is the shorthand of emotion",
        "Movies are the dreams of our waking life"
    ];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='black'>
                <div className='cyan'>
                    <div></div>
                </div>
            </div>
            <div className='nav_body'>
                <div className="navbar">
                    <Link className='login' to='/login'>Login</Link>
                    <Link className="signup" to="/signup">SignUp</Link>
                    <Link className='upload' to='/upload'>Upload</Link>
                   <div className='chatbot'> <button onClick={() => navigate('/bot')}>Chatbot</button></div>
                </div>
                <div id='title'>
                    <div id='titlename'>Vibe Vault</div>
                </div>
                <div className='quotes'>
                    <p>{currentQuote}</p>
                </div>
                <div id='moodbar'>
                    <Link to='/moodpage'>
                        <button className='moodbut'>Pick your Mood</button>
                    </Link>
                </div>
                <div className='about'>
                    <img className='playbutton' src={playbut} alt="Play button" onClick={openModal} />
                </div>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            Explanation
                            <video controls>
                                <source src={expvideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    
                )}
            </div>
        </>
    );
}

export default Navbar;
