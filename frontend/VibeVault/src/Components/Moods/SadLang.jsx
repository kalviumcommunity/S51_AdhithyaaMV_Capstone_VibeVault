import React from 'react';
import "../Moods/MoodLang.css"
import { Link } from 'react-router-dom';


function Sad() {
    return(
        <div className='opt'>
            <h1>Pick your Language</h1>
            <div className='langopt'>
                <Link className="tamil" to="/sadtam" >Tamil</Link>
                <Link className="telugu" to="/sadtel">Telugu</Link>
                <Link className="eng" to="/sadeng">English</Link>
            </div>
        </div>
    )
}

export { Sad };
