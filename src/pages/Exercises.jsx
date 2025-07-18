import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Exercises.css';

export default function Exercises() {
    const navigate = useNavigate();

    return (
        <div className="exercises-container">
            <button className="back-button" onClick={() => navigate('/vqm-luma-javascript/')}>
                <i className="fas fa-arrow-left"></i> Back to Home
            </button>
            <div className="exercises-content">
                 <h2><i className="fas fa-keyboard"></i> Coding Exercises</h2>
                 <p>This section is under construction. Coming soon!</p>
            </div>
        </div>
    );
}
