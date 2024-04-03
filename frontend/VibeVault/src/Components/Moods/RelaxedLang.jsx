import React from 'react';
import "../Moods/MoodLang.css"
import { Link } from 'react-router-dom';


function Relaxed() {
    return(
        <div className='opt'>
            <h1>Pick your Language</h1>
            <div className='langopt'>
                <Link className="tamil" to="/relaxedtam" >Tamil</Link>
                <Link className="telugu" to="/relaxedtel">Telugu</Link>
                <Link className="eng" to="/relaxedeng">English</Link>
            </div>
        </div>
    )
}

export { Relaxed };
