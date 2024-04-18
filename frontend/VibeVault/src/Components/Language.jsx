import React from 'react';
import { Link } from 'react-router-dom';

const Language = ({ onNext }) => {
  const handleLanguageSelection = (language) => {
    onNext(language);
  };

  return (
    <div>
      <h1>Pick Your Language</h1>
      <Link to='/content'><button onClick={() => handleLanguageSelection('tamil')}>Tamil</button></Link>
      <Link to='/content'><button onClick={() => handleLanguageSelection('english')}>English</button></Link>
      <Link to='/content'><button onClick={() => handleLanguageSelection('telugu')}>Telugu</button></Link>
    </div>
  );
};

export default Language;
