import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from './contexts/ProgressContext.jsx';
import { useBookmarks } from './contexts/BookmarkContext.jsx';
import { lumaData } from './pages/data.js';
import { advancedData } from './pages/advancedData.js';
import lumaLogo from '/src/assets/LUMA-logo.png'; // Import the logo

export default function HomePage({ toggleTheme, theme }) {
    const navigate = useNavigate();
    const { getCompletionStats, resetProgress } = useProgress();
    const { getBookmarkCount } = useBookmarks();
    const [showSettings, setShowSettings] = useState(false);

    const fundamentalsStats = getCompletionStats(lumaData.fundamentals);
    const advancedStats = getCompletionStats(advancedData);
    const bookmarkCount = getBookmarkCount();

    const handleResetProgress = () => {
        if (window.confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
            resetProgress();
            setShowSettings(false);
        }
    };

    return (
        <>
            <div className="header-buttons">
                <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
                    <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
                </button>
                <button onClick={() => setShowSettings(!showSettings)} className="settings-button" aria-label="Settings">
                    <i className="fas fa-cog"></i>
                </button>
            </div>
            {showSettings && (
                <div className="settings-dropdown">
                    <div className="settings-header">Settings</div>
                    <button onClick={handleResetProgress} className="reset-button">
                        <i className="fas fa-redo"></i> Reset Progress
                    </button>
                </div>
            )}
            <div className="home-container">
                <header className="home-header">
                    {/* The logo is now centered above the main title */}
                    <div className="logo-container">
                        <img src={lumaLogo} alt="LUMA Logo" className="luma-logo" />
                    </div>
                    <h1 className="main-title">LUMA</h1>
                    <p className="subtitle">Learn, Uncover, Master, Archive</p>
                </header>
                <div className="nav-cards">
                    <div className="nav-card" onClick={() => navigate('/vqm-luma-javascript/fundamentals')}>
                        {fundamentalsStats.percentage === 100 && (
                            <div className="completion-badge">
                                <i className="fas fa-check-circle"></i>
                            </div>
                        )}
                        <i className="fas fa-book"></i>
                        <h2>Fundamentals</h2>
                        <p>Start with the core concepts. Essential for every JavaScript developer.</p>
                        {fundamentalsStats.total > 0 && (
                            <div className="card-progress">
                                <div className="card-progress-bar">
                                    <div className="card-progress-fill" style={{ width: `${fundamentalsStats.percentage}%` }}></div>
                                </div>
                                <div className="card-progress-text">{fundamentalsStats.percentage}% Complete</div>
                            </div>
                        )}
                    </div>
                    <div className="nav-card" onClick={() => navigate('/vqm-luma-javascript/advanced')}>
                        {advancedStats.percentage === 100 && (
                            <div className="completion-badge">
                                <i className="fas fa-check-circle"></i>
                            </div>
                        )}
                        <i className="fas fa-brain"></i>
                        <h2>Advanced Topics</h2>
                        <p>Explore complex patterns, features, and best practices to level up.</p>
                        {advancedStats.total > 0 && (
                            <div className="card-progress">
                                <div className="card-progress-bar">
                                    <div className="card-progress-fill" style={{ width: `${advancedStats.percentage}%` }}></div>
                                </div>
                                <div className="card-progress-text">{advancedStats.percentage}% Complete</div>
                            </div>
                        )}
                    </div>
                    <div className="nav-card" onClick={() => navigate('/vqm-luma-javascript/bookmarks')}>
                        {bookmarkCount > 0 && (
                            <div className="bookmark-count-badge">
                                {bookmarkCount}
                            </div>
                        )}
                        <i className="fas fa-bookmark"></i>
                        <h2>My Bookmarks</h2>
                        <p>Quick access to your saved topics for easy reference.</p>
                        {bookmarkCount > 0 && (
                            <div className="bookmark-info">
                                <i className="fas fa-bookmark"></i> {bookmarkCount} bookmark{bookmarkCount !== 1 ? 's' : ''} saved
                            </div>
                        )}
                    </div>
                    <div className="nav-card" onClick={() => navigate('/vqm-luma-javascript/exercises')}>
                        <i className="fas fa-keyboard"></i>
                        <h2>Exercises</h2>
                        <p>Solidify your knowledge with hands-on coding challenges.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
