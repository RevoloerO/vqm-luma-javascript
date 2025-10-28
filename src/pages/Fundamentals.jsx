import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { lumaData } from './data.js';
import { useProgress } from '../contexts/ProgressContext.jsx';
import { useBookmarks } from '../contexts/BookmarkContext.jsx';
import './Fundamentals.css';

// Reusable CodeBlock component
const CodeBlock = ({ code }) => (
    <div className="code-block">
        <pre><code>{code.trim()}</code></pre>
    </div>
);

// MindMap component for visualization
const MindMap = ({ data }) => {
    const [expandedNodes, setExpandedNodes] = useState(new Set());

    const toggleNode = (index) => {
        const newExpandedNodes = new Set(expandedNodes);
        if (newExpandedNodes.has(index)) {
            newExpandedNodes.delete(index);
        } else {
            newExpandedNodes.add(index);
        }
        setExpandedNodes(newExpandedNodes);
    };

    const numNodes = data.nodes.length;
    let nodePositions;

    // Adjust layout based on the number of nodes for a balanced look
    if (numNodes === 2) {
        nodePositions = [ { x: 20, y: 50 }, { x: 80, y: 50 } ];
    } else if (numNodes === 3) {
        nodePositions = [ { x: 50, y: 15 }, { x: 20, y: 85 }, { x: 80, y: 85 } ];
    } else { // Default to 4-node layout
        nodePositions = [ { x: 25, y: 20 }, { x: 75, y: 20 }, { x: 75, y: 80 }, { x: 25, y: 80 } ];
    }
    
    const centerPos = { x: 50, y: 50 };

    return (
        <div className="mind-map-view">
            <svg className="mind-map-svg">
                {nodePositions.map((pos, index) => (
                    <line key={index} x1={`${centerPos.x}%`} y1={`${centerPos.y}%`} x2={`${pos.x}%`} y2={`${pos.y}%`} stroke="var(--border-color)" strokeWidth="2" />
                ))}
            </svg>
            <div className="mind-map-center-node">{data.center}</div>
            {data.nodes.map((node, index) => {
                const isExpanded = expandedNodes.has(index);
                return (
                    <div key={index} className={`mind-map-node ${isExpanded ? 'expanded' : ''}`} style={{ left: `${nodePositions[index].x}%`, top: `${nodePositions[index].y}%` }}>
                        <div className="node-content">
                            <div className="node-title">{node.title}</div>
                            <div className="node-keyword"><code>{node.keyword}</code></div>
                            <div className="node-description-container"><p className="node-description">{node.description}</p></div>
                        </div>
                        <button className="node-toggle-button" onClick={() => toggleNode(index)}><i className={`fas ${isExpanded ? 'fa-minus' : 'fa-plus'}`}></i></button>
                    </div>
                );
            })}
        </div>
    );
};


export default function Fundamentals() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isTopicComplete, markTopicComplete, getCompletionStats } = useProgress();
    const { isBookmarked, toggleBookmark } = useBookmarks();
    const firstTopic = lumaData.fundamentals[0];
    const initialActiveTopic = firstTopic.subTopics ? firstTopic.subTopics[0] : firstTopic;

    const [activeTopic, setActiveTopic] = useState(initialActiveTopic);
    const [viewMode, setViewMode] = useState('normal');
    const [expandedTopics, setExpandedTopics] = useState(new Set([firstTopic.id]));
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const completionStats = getCompletionStats(lumaData.fundamentals);

    // Handle navigation from search
    useEffect(() => {
        if (location.state?.topicId) {
            // Find the topic by ID
            let foundTopic = null;
            let parentId = null;

            lumaData.fundamentals.forEach(topic => {
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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleTopicClick = (topic) => {
        setActiveTopic(topic);
        setViewMode('normal');
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
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                    <h2>Fundamentals</h2>
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
                        {lumaData.fundamentals.map(topic => (
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
                                                                        section: 'Fundamentals',
                                                                        parentTitle: topic.title,
                                                                        route: '/vqm-luma-javascript/fundamentals'
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
                                                        section: 'Fundamentals',
                                                        route: '/vqm-luma-javascript/fundamentals'
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
                <div className="topic-header">
                    <h3>{activeTopic.title}</h3>
                    {activeTopic.mindMap && (
                        <div className="view-toggle">
                            <button onClick={() => setViewMode('normal')} className={viewMode === 'normal' ? 'active' : ''}><i className="fas fa-align-left"></i> Normal</button>
                            <button onClick={() => setViewMode('mindmap')} className={viewMode === 'mindmap' ? 'active' : ''}><i className="fas fa-project-diagram"></i> Mind Map</button>
                        </div>
                    )}
                </div>
                {viewMode === 'mindmap' && activeTopic.mindMap ? <MindMap data={activeTopic.mindMap} /> : (
                    <>
                        <div dangerouslySetInnerHTML={{ __html: activeTopic.content }} />
                        {activeTopic.code && <CodeBlock code={activeTopic.code} />}
                    </>
                )}
            </main>
            {showScrollTop && (
                <button onClick={scrollToTop} className="scroll-to-top-button">
                    <i className="fas fa-arrow-up"></i>
                </button>
            )}
        </div>
    );
}
