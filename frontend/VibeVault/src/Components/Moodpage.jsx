import React from 'react';
import { Link } from 'react-router-dom';

const Mood = ({ onNext }) => {
  const handleMoodSelection = (mood) => {
    onNext(mood);
  };

  return (
    <div>
      <h1>Pick Your Mood</h1>
      <Link to='/language'><button onClick={() => handleMoodSelection('funny')}>Funny</button></Link>
      <Link to='/language'><button onClick={() => handleMoodSelection('happy')}>Happy</button></Link>
      <Link to='/language'><button onClick={() => handleMoodSelection('thrill')}>Thrill</button></Link>
      <Link to='/language'><button onClick={() => handleMoodSelection('sad')}>Sad</button></Link>
      <Link to='/language'><button onClick={() => handleMoodSelection('inspired')}>Inspired</button></Link>
      <Link to='/language'><button onClick={() => handleMoodSelection('relaxed')}>Relaxed</button></Link>
      <Link to='/language'><button onClick={() => handleMoodSelection('scared')}>Scared</button></Link>
    </div>
  );
};

export default Mood;
