import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { lumaData } from './data.js';
import './Fundamentals.css';

// Reusable components can be defined here or imported from a shared file
const CodeBlock = ({ code }) => (
    <div className="code-block">
        <pre><code>{code.trim()}</code></pre>
    </div>
);

export default function Fundamentals() {
    const navigate = useNavigate();
    const [activeTopic, setActiveTopic] = useState(lumaData.fundamentals[0]);

    return (
        <div className="topic-page-container">
            <aside className="topic-sidebar">
                <button className="back-button" onClick={() => navigate('/vqm-luma-javascript/')}>
                    <i className="fas fa-arrow-left"></i> Back to Home
                </button>
                <h2>Fundamentals</h2>
                <ul className="topic-list">
                    {lumaData.fundamentals.map(topic => (
                        <li 
                            key={topic.id} 
                            className={`topic-list-item ${activeTopic.id === topic.id ? 'active' : ''}`}
                            onClick={() => setActiveTopic(topic)}
                        >
                            <i className={`fas ${topic.icon}`} style={{ marginRight: '10px', width: '20px' }}></i>
                            {topic.title}
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="topic-content">
                <h3>{activeTopic.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: activeTopic.content }} />
                {activeTopic.code && <CodeBlock code={activeTopic.code} />}
            </main>
        </div>
    );
}
