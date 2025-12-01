import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import './App.css'; // Import global styles and themes

// Lazy load route components for better performance
const HomePage = lazy(() => import('./HomePage'));
const Fundamentals = lazy(() => import('./pages/Fundamentals'));
const Advanced = lazy(() => import('./pages/Advanced'));
const Exercises = lazy(() => import('./pages/Exercises'));
const Bookmarks = lazy(() => import('./pages/Bookmarks'));

// Loading component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.5rem',
    color: 'var(--text-secondary)'
  }}>
    <i className="fas fa-spinner fa-spin" style={{ marginRight: '1rem' }}></i>
    Loading...
  </div>
);

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
    <div className="luma-app">
      <SearchBar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/vqm-luma-javascript/" element={<HomePage toggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/vqm-luma-javascript/fundamentals" element={<Fundamentals theme={theme} />} />
          <Route path="/vqm-luma-javascript/advanced" element={<Advanced theme={theme} />} />
          <Route path="/vqm-luma-javascript/exercises" element={<Exercises theme={theme} />} />
          <Route path="/vqm-luma-javascript/bookmarks" element={<Bookmarks theme={theme} />} />
        </Routes>
      </Suspense>
    </div>
  )
}
