import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Fundamentals from './pages/Fundamentals';
import Advanced from './pages/Advanced';
import Exercises from './pages/Exercises';
import Bookmarks from './pages/Bookmarks';
import SearchBar from './components/SearchBar';
import './App.css'; // Import global styles and themes

export default function App() {
  const [theme, setTheme] = useState('light');

  // This effect will apply the theme to the document's body element
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    // The data-theme attribute is no longer needed here
    <div className="luma-app">
      <SearchBar />
      <Routes>
        <Route path="/vqm-luma-javascript/" element={<HomePage toggleTheme={toggleTheme} theme={theme} />} />
        <Route path="/vqm-luma-javascript/fundamentals" element={<Fundamentals theme={theme} />} />
        <Route path="/vqm-luma-javascript/advanced" element={<Advanced theme={theme} />} />
        <Route path="/vqm-luma-javascript/exercises" element={<Exercises theme={theme} />} />
        <Route path="/vqm-luma-javascript/bookmarks" element={<Bookmarks theme={theme} />} />
      </Routes>
    </div >
  )
}
