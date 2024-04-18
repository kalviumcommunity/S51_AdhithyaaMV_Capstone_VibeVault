import React from 'react';

const ContentSelection = ({ onNext }) => {
  const handleContentSelection = (content) => {
    onNext(content);
  };

  return (
    <div>
      <h1>Select Your Content Type</h1>
      <button onClick={() => handleContentSelection('music')}>Music</button>
      <button onClick={() => handleContentSelection('movie')}>Movie/Webseries</button>
    </div>
  );
};

export default ContentSelection;
