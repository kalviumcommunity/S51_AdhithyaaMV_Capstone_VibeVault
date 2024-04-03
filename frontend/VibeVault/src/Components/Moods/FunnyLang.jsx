import React from 'react';
import "../Moods/MoodLang.css"
import { Link } from 'react-router-dom';

function Funny() {
    return(
        <div className='opt'>
            <h1>Pick your Language</h1>
            <div className='langopt'>
                <Link className="tamil" to="/funnytam" >Tamil</Link>
                <Link className="telugu" to="/funnytel">Telugu</Link>
                <Link className="eng" to="/funnyeng">English</Link>

            </div>
        </div>
    )
}

export { Funny };
