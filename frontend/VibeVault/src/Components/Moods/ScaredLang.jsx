import React from 'react';
import "../Moods/MoodLang.css"
import { Link } from 'react-router-dom';


function Scared() {
    return(
        <div className='opt'>
            <h1>Pick your Language</h1>
            <div className='langopt'>
                <Link className="tamil" to="/scaredtam" >Tamil</Link>
                <Link className="telugu" to="/scaredtel">Telugu</Link>
                <Link className="eng" to="/scaredeng">English</Link>
            </div>
        </div>
    )
}

export { Scared };
