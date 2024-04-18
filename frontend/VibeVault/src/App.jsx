import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Mood from './Components/Moodpage';
import Language from './Components/Language';
import ContentSelection from './Components/ContentSelection';
import Login from './Components/Login'; // Correct import name
import Upload from './Components/Upload'; // Correct import name
import Navbar from './Components/NavBar'; // Correct import name

const App = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedContent, setSelectedContent] = useState('');

  const handleMoodNext = (mood) => {
    setSelectedMood((prevMood) => {
      console.log("New Mood:", mood);
      return mood;
    });
  };
  
  const handleLanguageNext = (language) => {
    setSelectedLanguage((prevLanguage) => {
      console.log("New Language:", language);
      return language;
    });
  };
  
  const handleContentNext = (content) => {
    setSelectedContent((prevContent) => {
      console.log("New Content:", content);
      return content;
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/mood" />} />
        <Route path="/mood" element={<Mood onNext={handleMoodNext} />} />
        <Route path="/language" element={<Language onNext={handleLanguageNext} />} />
        <Route path="/content" element={<ContentSelection onNext={handleContentNext} />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} /> 
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </Router>
  );
};

export default App;
