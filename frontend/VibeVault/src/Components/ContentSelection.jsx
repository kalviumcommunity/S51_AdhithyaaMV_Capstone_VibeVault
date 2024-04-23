import React from 'react';
import "./ContentSelection.css"

const ContentSelection = ({ onNext }) => {
  const handleContentSelection = (content) => {
    onNext(content);
  };

  return (
    <div className='content'>
      <div className='pick'>
        <h1>Here is your Pick</h1>
      </div>
      <div className="btnsdiv">
      <button className='p'onClick={() => handleContentSelection('music')}>Music</button>
      <button className='p' onClick={() => handleContentSelection('movie')}>Movie/Webseries</button>
      </div>
    </div>
  );
};

export default ContentSelection;
