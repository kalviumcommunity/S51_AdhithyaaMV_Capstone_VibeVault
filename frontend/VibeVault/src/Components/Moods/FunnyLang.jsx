import React from 'react';
import "../Moods/MoodLang.css"

function Funny() {
    return(
        <div className='opt'>
            <h1>Language</h1>
            <div className='langopt'>
                <div className='tamil'>Tamil</div>
                <div className='telugu'>Telugu</div>
                <div className='eng'>English</div>
            </div>
        </div>
    )
}

export { Funny };
