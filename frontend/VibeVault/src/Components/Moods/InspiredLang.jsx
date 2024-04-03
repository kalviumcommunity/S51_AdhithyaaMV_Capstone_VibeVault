import React from 'react';
import "../Moods/MoodLang.css"
import { Link } from 'react-router-dom';


function Inspired() {
    return(
        <div className='opt'>
            <h1>Pick your Language</h1>
            <div className='langopt'>
                <Link className="tamil" to="/inspiredtam" >Tamil</Link>
                <Link className="telugu" to="/inspiredtel">Telugu</Link>
                <Link className="eng" to="/inspiredeng">English</Link>
            </div>
        </div>
    )
}

export { Inspired };
