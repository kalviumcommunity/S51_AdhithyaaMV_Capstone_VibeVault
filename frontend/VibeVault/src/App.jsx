import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Mood from './Components/Moodpage';
import Language from './Components/Language';
import ContentSelection from './Components/ContentSelection';
import Login from './Components/Login';
import Upload from './Components/Upload';
import Navbar from './Components/NavBar';
import Signup from './Components/Signup';
import HomePage from './Components/Home';


const App = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null); 
  const [filteredData, setFilteredData] = useState([]);

  console.log(filteredData)
  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/get');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Log the fetched data
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterAndSortData = async (mood, language) => {
    const data = await fetchData();
    console.log(data);
    if (!data) {
      return [];
    }   
    console.log(mood,language)
    const filteredData = data.filter(item => item.mood === mood &&  item.language === language);
    console.log(filteredData)

    filteredData.sort((a, b) => {
      if (a.Mood < b.Mood) return -1;
      if (a.Mood > b.Mood) return 1;
      if (a.Language < b.Language) return -1;
      if (a.Language > b.Language) return 1;
      return 0;
    });

    return filteredData;
  };

  useEffect(() => {
    if (selectedMood && selectedLanguage) {
      filterAndSortData(selectedMood, selectedLanguage)
        .then(filteredData => {
          setFilteredData(filteredData);
        })
        .catch(error => console.error('Error filtering and sorting data:', error));
    }
    // fetchData()
  }, [selectedMood, selectedLanguage]);

  const handleMoodNext = (mood) => {
    setSelectedMood(mood);
  };

  const handleLanguageNext = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/navbar" />} />
        <Route path="/moodpage" element={<Mood onNext={handleMoodNext} />} />
        <Route path="/language" element={<Language onNext={handleLanguageNext} />} />
        <Route path="/content" element={<ContentSelection selectedMood={selectedMood} selectedLanguage={selectedLanguage} filteredData={filteredData}/>} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
