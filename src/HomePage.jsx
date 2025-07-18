import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage({ toggleTheme, theme }) {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
                <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
            <div className="home-container">
                <header className="home-header">
                    <h1>LUMA</h1>
                    <p>Learn, Uncover, Master, Archive</p>
                </header>
                <div className="nav-cards">
                    <div className="nav-card" onClick={() => navigate('/vqm-luma-javascript/fundamentals')}>
                        <i className="fas fa-book"></i>
                        <h2>Fundamentals</h2>
                        <p>Start with the core concepts. Essential for every JavaScript developer.</p>
                    </div>
                    <div className="nav-card" onClick={() => navigate('/vqm-luma-javascript/advanced')}>
                        <i className="fas fa-brain"></i>
                        <h2>Advanced Topics</h2>
                        <p>Explore complex patterns, features, and best practices to level up.</p>
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
