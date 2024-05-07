import React from 'react';
import { Link } from 'react-router-dom';
import "./Moodpage.css";

const Mood = ({ onNext }) => {
  const handleMoodSelection = (mood) => {
    onNext(mood);
  };

  return (
    <div className='emotions'>
      <div className='rotated-text'>
        <h1>Pick Your Mood</h1>
      </div>
      <div className='links_emotions'>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('Funny')}>Funny</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('Happy')}>Happy</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('Thrill')}>Thrill</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('Sad')}>Sad</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('Inspired')}>Inspired</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('Relaxed')}>Relaxed</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('Scared')}>Scared</button></Link>
      </div>
    </div>
  );
};

export default Mood;
