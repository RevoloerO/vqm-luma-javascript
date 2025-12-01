import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { advancedData } from './advancedData.js';
import { useProgress } from '../contexts/ProgressContext.jsx';
import { useBookmarks } from '../contexts/BookmarkContext.jsx';
import CodeBlock from '../components/CodeBlock';
import './Advanced.css';

export default function Advanced({ theme }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { isTopicComplete, markTopicComplete, getCompletionStats } = useProgress();
    const { isBookmarked, toggleBookmark } = useBookmarks();

    const firstTopic = advancedData[0];
    const initialActiveTopic = firstTopic.subTopics ? firstTopic.subTopics[0] : firstTopic;

    const [activeTopic, setActiveTopic] = useState(initialActiveTopic);
    const [expandedTopics, setExpandedTopics] = useState(new Set([firstTopic.id]));
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const completionStats = getCompletionStats(advancedData);

    // Handle navigation from search
    useEffect(() => {
        if (location.state?.topicId) {
            // Find the topic by ID
            let foundTopic = null;
            let parentId = null;

            advancedData.forEach(topic => {
                if (topic.subTopics) {
                    const subTopic = topic.subTopics.find(st => st.id === location.state.topicId);
                    if (subTopic) {
                        foundTopic = subTopic;
                        parentId = topic.id;
                    }
                } else if (topic.id === location.state.topicId) {
                    foundTopic = topic;
                }
            });

            if (foundTopic) {
                setActiveTopic(foundTopic);
                if (parentId) {
                    setExpandedTopics(prev => new Set([...prev, parentId]));
                }
            }
        }
    }, [location.state]);

    const handleTopicClick = (topic) => {
        setActiveTopic(topic);
        setSidebarOpen(false); // Close sidebar on mobile when topic is selected
        window.scrollTo(0, 0); // Scroll to top when a new topic is selected
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
            <button
                className="mobile-menu-toggle"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle menu"
            >
                <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <aside className={`topic-sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-header">
                    <button className="back-button" onClick={() => navigate('/vqm-luma-javascript/')}>
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </button>
                    <h2>Advanced Topics</h2>
                    <div className="progress-indicator">
                        <div className="progress-text">
                            {completionStats.completed} / {completionStats.total} completed
                        </div>
                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: `${completionStats.percentage}%` }}></div>
                        </div>
                        <div className="progress-percentage">{completionStats.percentage}%</div>
                    </div>
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
                                                    <li key={subTopic.id} className={`sub-topic ${activeTopic.id === subTopic.id ? 'active' : ''}`}>
                                                        <div className="topic-item-content" onClick={() => handleTopicClick(subTopic)}>
                                                            <i className={`fas ${subTopic.icon}`}></i>
                                                            <span>{subTopic.title}</span>
                                                        </div>
                                                        <div className="topic-actions">
                                                            <button
                                                                className="bookmark-button"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    toggleBookmark(subTopic.id, {
                                                                        title: subTopic.title,
                                                                        section: 'Advanced',
                                                                        parentTitle: topic.title,
                                                                        route: '/vqm-luma-javascript/advanced'
                                                                    });
                                                                }}
                                                                aria-label="Toggle bookmark"
                                                            >
                                                                <i className={`${isBookmarked(subTopic.id) ? 'fas' : 'far'} fa-bookmark`}></i>
                                                            </button>
                                                            <input
                                                                type="checkbox"
                                                                className="topic-checkbox"
                                                                checked={isTopicComplete(subTopic.id)}
                                                                onChange={(e) => {
                                                                    e.stopPropagation();
                                                                    markTopicComplete(subTopic.id, e.target.checked);
                                                                }}
                                                                onClick={(e) => e.stopPropagation()}
                                                            />
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <div className={`topic-list-item ${activeTopic.id === topic.id ? 'active' : ''}`}>
                                        <div className="topic-item-content" onClick={() => handleTopicClick(topic)}>
                                            <i className={`fas ${topic.icon}`}></i>
                                            <span>{topic.title}</span>
                                        </div>
                                        <div className="topic-actions">
                                            <button
                                                className="bookmark-button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleBookmark(topic.id, {
                                                        title: topic.title,
                                                        section: 'Advanced',
                                                        route: '/vqm-luma-javascript/advanced'
                                                    });
                                                }}
                                                aria-label="Toggle bookmark"
                                            >
                                                <i className={`${isBookmarked(topic.id) ? 'fas' : 'far'} fa-bookmark`}></i>
                                            </button>
                                            <input
                                                type="checkbox"
                                                className="topic-checkbox"
                                                checked={isTopicComplete(topic.id)}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    markTopicComplete(topic.id, e.target.checked);
                                                }}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        </div>
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
                {activeTopic.code && <CodeBlock code={activeTopic.code} theme={theme} />}
            </main>
        </div>
    );
}
