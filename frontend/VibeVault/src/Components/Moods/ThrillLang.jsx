import React from 'react';
import "../Moods/MoodLang.css"
import { Link } from 'react-router-dom';


function Thrill() {
    return(
        <div className='opt'>
            <h1>Pick your Language</h1>
            <div className='langopt'>
                <Link className="tamil" to="/thrilltam" >Tamil</Link>
                <Link className="telugu" to="/thrilltel">Telugu</Link>
                <Link className="eng" to="/thrilleng">English</Link>
            </div>
        </div>
    )
}

export { Thrill };
