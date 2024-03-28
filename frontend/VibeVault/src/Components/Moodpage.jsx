import React from "react";
import "../Components/Moodpage.css";


function Moodpage (){
    return(
        <div className="main">
            <h1>Pick your Mood</h1>
            <div className="emotions">

                <div className="e1">HAPPY </div>
                
                <div className="e2">SAD </div>
                
                <div className="e3">THRILL </div>
                
                <div className="e4">RELAXED</div>

                <div className="e5">SCARED</div>

                <div className="e6">INSPIRED</div>

                <div className="e7">HUMOROUS</div>

            </div>
        </div>
    )
}

export default Moodpage;