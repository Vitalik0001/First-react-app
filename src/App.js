import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <>
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} 
      />
      <Main 
        darkMode={darkMode} 
      />
    </>
  )
}

