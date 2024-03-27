import React from "react";
import "../Components/Moodpage.css";


function Moodpage (){
    return(
        <div className="main">
            <h1>Pick your Mood</h1>
            <div className="emotions">

                <button className="e1">HAPPY</button>
                
                <button className="e1">SAD</button>
                
                <button className="e1">THRILL</button>
                
                <button className="e1">RELAXED</button>

                <button className="e1">SCARED</button>

                <button className="e1">INSPIRED</button>

                <button className="e1">HUMOROUS</button>

            </div>
        </div>
    )
}

export default Moodpage;