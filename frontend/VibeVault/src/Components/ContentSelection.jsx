import React, { useState } from 'react';
import "./ContentSelection.css"
import { useNavigate } from 'react-router';

const ContentSelection = ({ selectedMood, selectedLanguage, filteredData }) => {
  const [contentType, setContentType] = useState('abx'); // State to track the selected content type
  const navigate = useNavigate()

  
  const [filterContent, setFilteredContent] = useState([])
  console.log(filterContent , "hele")
  const handleContentSelection = (type) => {
    // setContentType(type); // Update the content type state
  setFilteredContent(filteredData.filter(item => item.type === type))
  console.log(filteredData.filter(item => item.Type === type))

  };

  // Filter the data based on the content type
  const backer = async () =>{
    setFilteredContent([])
    handleContentSelection('M')

    navigate('/language')
  }

  return (
    <div className='content'>
      <div className='pick'>
        <h1>Here is your Pick</h1>
      </div>
      <button className='back' onClick={backer}>BACK</button>
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
              <p>{item.name}</p>
              <img src={item.img} alt="" onClick={() => window.open(`${item.link}`)} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ContentSelection;
