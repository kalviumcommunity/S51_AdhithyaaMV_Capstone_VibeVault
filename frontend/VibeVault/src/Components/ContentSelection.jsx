import React, { useState } from 'react';
import "./ContentSelection.css"

const ContentSelection = ({ selectedMood, selectedLanguage, filteredData }) => {
  const [contentType, setContentType] = useState('music'); // State to track the selected content type

  
  const [filterContent, setFilteredContent] = useState(filteredData)
  
  const handleContentSelection = (type) => {
    // setContentType(type); // Update the content type state
  setFilteredContent(filteredData.filter(item => item.type === type))
  console.log(filteredData.filter(item => item.Type === type))

  };

  // Filter the data based on the content type

  return (
    <div className='content'>
      <div className='pick'>
        <h1>Here is your Pick</h1>
      </div>
      
      <div className="btnsdiv">
        <button className='p' onClick={() => handleContentSelection('Music')}>Music</button>
        <button className='p' onClick={() => handleContentSelection('Movies')}>Movie</button>
      </div>

      <div className='preference'>
        <p>Selected Mood: {selectedMood}</p> 
        <p>Selected Language: {selectedLanguage}</p>
      </div>
      
      <div className="data-container">
        <h2>Filtered Data:</h2>
        <ul className='datagrid'>
          {filterContent.map((item, index) => (
            <li key={index}>
              
              <img src={item.img} alt="" onClick={() => window.open(`${item.link}`)} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ContentSelection;
