import React from 'react';
import "./ContentSelection.css"

const ContentSelection = ({ selectedMood, selectedLanguage, filteredData }) => {
  return (
    <div className='content'>
      <div className='pick'>
        <h1>Here is your Pick</h1>
      </div>
      
      <div className="btnsdiv">
        <button className='p' onClick={() => handleContentSelection('music')}>Music</button>
        <button className='p' onClick={() => handleContentSelection('movie')}>Movie/Webseries</button>
      </div>

      <div className='preference'>
        <p>Selected Mood: {selectedMood}</p> 
        <p>Selected Language: {selectedLanguage}</p>
      </div>
      
      <div className="data-container">
        <h2>Filtered Data:</h2>
        <ul className='datagrid'>
          {filteredData.map((item, index) => (
            <li key={index}>
              <p>Mood: {item.Mood}</p>
              <p>Language: {item.Language}</p>
              <img src={item.Image} alt="" onClick={() => window.open(`${item.Link}`)} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ContentSelection;
