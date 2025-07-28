import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { advancedData } from './advancedData.js';
import './Advanced.css'; // You'll likely want to use Fundamentals.css or a shared CSS file

// Reusable components
const CodeBlock = ({ code }) => (
    <div className="code-block">
        <pre><code>{code.trim()}</code></pre>
    </div>
);

export default function Advanced() {
    const navigate = useNavigate();
    
    const firstTopic = advancedData[0];
    const initialActiveTopic = firstTopic.subTopics ? firstTopic.subTopics[0] : firstTopic;

    const [activeTopic, setActiveTopic] = useState(initialActiveTopic);
    const [expandedTopics, setExpandedTopics] = useState(new Set([firstTopic.id]));

    const handleTopicClick = (topic) => {
        setActiveTopic(topic);
    };

    const handleParentTopicClick = (topicId) => {
        const newExpanded = new Set(expandedTopics);
        if (newExpanded.has(topicId)) {
            newExpanded.delete(topicId);
        } else {
            newExpanded.add(topicId);
        }
        setExpandedTopics(newExpanded);
    };

    return (
        <div className="topic-page-container">
            <aside className="topic-sidebar">
                <div className="sidebar-header">
                    <button className="back-button" onClick={() => navigate('/vqm-luma-javascript/')}>
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </button>
                    <h2>Advanced Topics</h2>
                </div>
                <nav className="topic-nav">
                    <ul className="topic-list">
                        {advancedData.map(topic => (
                            <li key={topic.id} className={`topic-list-item-wrapper ${topic.subTopics ? 'has-sub-topics' : ''}`}>
                                {topic.subTopics ? (
                                    <>
                                        <div 
                                            className={`parent-topic ${expandedTopics.has(topic.id) ? 'expanded' : ''} ${topic.subTopics.some(sub => sub.id === activeTopic.id) ? 'parent-active' : ''}`}
                                            onClick={() => handleParentTopicClick(topic.id)}
                                        >
                                            <i className={`fas ${topic.icon}`}></i>
                                            <span>{topic.title}</span>
                                            <i className="fas fa-chevron-down expand-icon"></i>
                                        </div>
                                        {expandedTopics.has(topic.id) && (
                                            <ul className="sub-topic-list">
                                                {topic.subTopics.map(subTopic => (
                                                    <li key={subTopic.id} className={`sub-topic ${activeTopic.id === subTopic.id ? 'active' : ''}`} onClick={() => handleTopicClick(subTopic)}>
                                                        <i className={`fas ${subTopic.icon}`}></i>
                                                        <span>{subTopic.title}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <div className={`topic-list-item ${activeTopic.id === topic.id ? 'active' : ''}`} onClick={() => handleTopicClick(topic)}>
                                        <i className={`fas ${topic.icon}`}></i>
                                        <span>{topic.title}</span>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <main className="topic-content">
                <h3>{activeTopic.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: activeTopic.content }} />
                {activeTopic.code && <CodeBlock code={activeTopic.code} />}
            </main>
        </div>
    );
}
