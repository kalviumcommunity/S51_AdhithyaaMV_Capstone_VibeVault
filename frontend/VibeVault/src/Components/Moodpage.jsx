import React from 'react';
import { Link } from 'react-router-dom';
import "./Moodpage.css"

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
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('funny')}>Funny</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('happy')}>Happy</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('happy')}>Happy</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('thrill')}>Thrill</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('sad')}>Sad</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('inspired')}>Inspired</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('relaxed')}>Relaxed</button></Link>
        <Link className='ele' to='/language'><button className='e' onClick={() => handleMoodSelection('scared')}>Scared</button></Link>
      </div>
    </div>
  );
};

export default Mood;
