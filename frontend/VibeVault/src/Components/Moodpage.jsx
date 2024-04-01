import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Components/Moodpage.css";

function Moodpage (){
    return(
        <div className="main">
            <h1>Pick your Mood</h1>
            <div className="emotions">
                <Link className="e1" to='/sad'>Sad</Link>
                <Link className="e2" to='/happy'>Happy</Link>
                <Link className="e3" to='/thrill'>Thrill</Link>
                <Link className="e4" to='/relaxed'>Relaxed</Link>
                <Link className="e5" to='/scared'>Scared</Link>
                <Link className="e6" to='/inspired'>Inspired</Link>
                <Link className="e7" to='/funny'>Funny</Link>
            </div>
        </div>
    );
}

export default Moodpage;
