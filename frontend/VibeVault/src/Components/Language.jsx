import React from 'react';
import { Link } from 'react-router-dom';
import "./Language.css"
import { useNavigate } from 'react-router';


const Language = ({ onNext }) => {
  const handleLanguageSelection = (language) => {
    onNext(language);
  };

  const navigate = useNavigate()


  return (
    <div className='language'>
      <div className='selection'>
        <h1>Pick Your Language</h1>
      </div>
      <button className='back' onClick={() => navigate('/moodpage')}>BACK</button>
      <div className='links_language'>
      <Link className='la' to='/content'><button className='l' onClick={() => handleLanguageSelection('Tamil')}>Tamil</button></Link>
      <Link className='la' to='/content'><button className='l' onClick={() => handleLanguageSelection('English')}>English</button></Link>
      <Link className='la' to='/content'><button className='l' onClick={() => handleLanguageSelection('Telugu')}>Telugu</button></Link>
      </div>
    </div>
  );
};

export default Language;
