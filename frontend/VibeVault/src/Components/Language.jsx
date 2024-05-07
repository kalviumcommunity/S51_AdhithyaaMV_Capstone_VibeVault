import React from 'react';
import { Link } from 'react-router-dom';
import "./Language.css"

const Language = ({ onNext }) => {
  const handleLanguageSelection = (language) => {
    onNext(language);
  };

  return (
    <div className='language'>
      <div className='selection'>
        <h1>Pick Your Language</h1>
      </div>
      <Link className='la' to='/content'><button className='l' onClick={() => handleLanguageSelection('Tamil')}>Tamil</button></Link>
      <Link className='la' to='/content'><button className='l' onClick={() => handleLanguageSelection('english')}>English</button></Link>
      <Link className='la' to='/content'><button className='l' onClick={() => handleLanguageSelection('telugu')}>Telugu</button></Link>
    </div>
  );
};

export default Language;
