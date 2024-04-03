import React from 'react';
import "../Moods/MoodLang.css"
import { Link } from 'react-router-dom';


function Happy() {
    return(
        <div className='opt'>
            <h1>Pick your Language</h1>
            <div className='langopt'>
                <Link className="tamil" to="/happytam">Tamil</Link>
                <Link className="telugu" to="/happytel">Telugu</Link>
                <Link className="eng" to="/happyeng">English</Link>
            </div>
        </div>
    )
    
}

export { Happy };
