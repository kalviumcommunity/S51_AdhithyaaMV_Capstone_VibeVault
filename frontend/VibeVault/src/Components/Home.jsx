 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Mood from './Moodpage';
import Language from './Language';
import ContentSelection from './ContentSelection';

const HomePage = () => {
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    // Fetch user selection from the API
    fetch('http://localhost:8000/get')
      .then(response => response.json())
      .then(data => {
        // Update user selection state
        setUserSelection(data);
      })
      .catch(error => {
        console.error('Error fetching user selection:', error);
      });
  }, []);

  const handleNext = (selection) => {
    // Logic for handling next step after user selection
    console.log('Next step:', selection);
  };

  // Render component based on user selection
  const renderComponent = () => {
    if (!userSelection) {
      // If user selection is not yet fetched, render a loading indicator or return null
      return <p>Loading...</p>;
    }

    switch (userSelection.step) {
      case 'mood':
        return <Mood onNext={handleNext} />;
      case 'language':
        return <Language onNext={handleNext} />;
      case 'content':
        return <ContentSelection onNext={handleNext} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default HomePage;
