import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { lumaData } from './data.js';
import { useProgress } from '../contexts/ProgressContext.jsx';
import { useBookmarks } from '../contexts/BookmarkContext.jsx';
import { sanitizeHtml } from '../utils/sanitize.js';
import TopicSkeleton from '../components/TopicSkeleton.jsx';
import './Fundamentals.css';

// Reusable CodeBlock component
const CodeBlock = ({ code }) => (
    <div className="code-block">
        <pre><code>{code.trim()}</code></pre>
    </div>
);

// Calculate node positions outside component to avoid recalculation
const calculateNodePositions = (numNodes) => {
    if (numNodes === 2) {
        return [{ x: 20, y: 50 }, { x: 80, y: 50 }];
    } else if (numNodes === 3) {
        return [{ x: 50, y: 15 }, { x: 20, y: 85 }, { x: 80, y: 85 }];
    }
    // Default to 4-node layout
    return [{ x: 25, y: 20 }, { x: 75, y: 20 }, { x: 75, y: 80 }, { x: 25, y: 80 }];
};

// MindMap component for visualization
const MindMap = React.memo(({ data }) => {
    const [expandedNodes, setExpandedNodes] = useState(new Set());

    const toggleNode = useCallback((index) => {
        setExpandedNodes(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    }, []);

    const nodePositions = useMemo(
        () => calculateNodePositions(data.nodes.length),
        [data.nodes.length]
    );

    const centerPos = { x: 50, y: 50 };

    return (
        <div className="mind-map-view" role="img" aria-label={`Mind map showing ${data.center} and related concepts`}>
            <svg className="mind-map-svg" aria-hidden="true">
                {nodePositions.map((pos, index) => (
                    <line
                        key={index}
                        x1={`${centerPos.x}%`}
                        y1={`${centerPos.y}%`}
                        x2={`${pos.x}%`}
                        y2={`${pos.y}%`}
                        stroke="var(--border-color)"
                        strokeWidth="2"
                    />
                ))}
            </svg>
            <div className="mind-map-center-node">{data.center}</div>
            {data.nodes.map((node, index) => {
                const isExpanded = expandedNodes.has(index);
                return (
                    <div
                        key={index}
                        className={`mind-map-node ${isExpanded ? 'expanded' : ''}`}
                        style={{ left: `${nodePositions[index].x}%`, top: `${nodePositions[index].y}%` }}
                    >
                        <div className="node-content">
                            <div className="node-title">{node.title}</div>
                            <div className="node-keyword"><code>{node.keyword}</code></div>
                            <div className="node-description-container">
                                <p className="node-description">{node.description}</p>
                            </div>
                        </div>
                        <button
                            className="node-toggle-button"
                            onClick={() => toggleNode(index)}
                            aria-expanded={isExpanded}
                            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${node.title} details`}
                        >
                            <i className={`fas ${isExpanded ? 'fa-minus' : 'fa-plus'}`} aria-hidden="true"></i>
                        </button>
                    </div>
                );
            })}
        </div>
    );
});

MindMap.displayName = 'MindMap';

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
    const [isLoading, setIsLoading] = useState(false);

    const completionStats = getCompletionStats(lumaData.fundamentals);

    // Find parent topic for breadcrumb
    const parentTopic = useMemo(() => {
        return lumaData.fundamentals.find(topic =>
            topic.subTopics?.some(sub => sub.id === activeTopic.id)
        );
    }, [activeTopic.id]);

    // Handle navigation from search
    useEffect(() => {
        if (location.state?.topicId) {
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

    // Debounced scroll handler for performance
    useEffect(() => {
        let timeoutId;
        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setShowScrollTop(window.scrollY > 300);
            }, 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    const handleTopicClick = useCallback((topic) => {
        setIsLoading(true);
        setActiveTopic(topic);
        setViewMode('normal');
        setSidebarOpen(false);
        window.scrollTo(0, 0);
        // Simulate brief loading for smooth transition
        setTimeout(() => setIsLoading(false), 150);
    }, []);

    const handleParentTopicClick = useCallback((topicId) => {
        setExpandedTopics(prev => {
            const newExpanded = new Set(prev);
            if (newExpanded.has(topicId)) {
                newExpanded.delete(topicId);
            } else {
                newExpanded.add(topicId);
            }
            return newExpanded;
        });
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    // Sanitize HTML content
    const sanitizedContent = useMemo(
        () => sanitizeHtml(activeTopic.content),
        [activeTopic.content]
    );

    return (
        <div className="topic-page-container">
            <button
                className="mobile-menu-toggle"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={sidebarOpen}
            >
                <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
            </button>

            <aside
                className={`topic-sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}
                aria-label="Topic navigation"
            >
                <div className="sidebar-header">
                    <button
                        className="back-button"
                        onClick={() => navigate('/vqm-luma-javascript/')}
                        aria-label="Go back to home page"
                    >
                        <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
                    </button>
                    <h2 id="sidebar-title">Fundamentals</h2>
                    <div className="progress-indicator" role="region" aria-label="Learning progress">
                        <div className="progress-text">
                            {completionStats.completed} / {completionStats.total} completed
                        </div>
                        <div
                            className="progress-bar-container"
                            role="progressbar"
                            aria-valuenow={completionStats.percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-label={`${completionStats.percentage}% complete`}
                        >
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${completionStats.percentage}%` }}
                            ></div>
                        </div>
                        <div className="progress-percentage">{completionStats.percentage}%</div>
                    </div>
                </div>
                <nav className="topic-nav" aria-labelledby="sidebar-title">
                    <ul className="topic-list" role="tree">
                        {lumaData.fundamentals.map(topic => (
                            <li
                                key={topic.id}
                                className={`topic-list-item-wrapper ${topic.subTopics ? 'has-sub-topics' : ''}`}
                                role="treeitem"
                                aria-expanded={topic.subTopics ? expandedTopics.has(topic.id) : undefined}
                            >
                                {topic.subTopics ? (
                                    <>
                                        <div
                                            className={`parent-topic ${expandedTopics.has(topic.id) ? 'expanded' : ''} ${topic.subTopics.some(sub => sub.id === activeTopic.id) ? 'parent-active' : ''}`}
                                            onClick={() => handleParentTopicClick(topic.id)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    handleParentTopicClick(topic.id);
                                                }
                                            }}
                                            tabIndex={0}
                                            role="button"
                                            aria-expanded={expandedTopics.has(topic.id)}
                                            aria-label={`${topic.title}, ${expandedTopics.has(topic.id) ? 'collapse' : 'expand'} section`}
                                        >
                                            <i className={`fas ${topic.icon}`} aria-hidden="true"></i>
                                            <span>{topic.title}</span>
                                            <i className="fas fa-chevron-down expand-icon" aria-hidden="true"></i>
                                        </div>
                                        {expandedTopics.has(topic.id) && (
                                            <ul className="sub-topic-list" role="group">
                                                {topic.subTopics.map(subTopic => (
                                                    <li
                                                        key={subTopic.id}
                                                        className={`sub-topic ${activeTopic.id === subTopic.id ? 'active' : ''}`}
                                                        role="treeitem"
                                                        aria-selected={activeTopic.id === subTopic.id}
                                                    >
                                                        <div
                                                            className="topic-item-content"
                                                            onClick={() => handleTopicClick(subTopic)}
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter' || e.key === ' ') {
                                                                    e.preventDefault();
                                                                    handleTopicClick(subTopic);
                                                                }
                                                            }}
                                                            tabIndex={0}
                                                            role="button"
                                                            aria-label={`View ${subTopic.title}`}
                                                        >
                                                            <i className={`fas ${subTopic.icon}`} aria-hidden="true"></i>
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
                                                                aria-label={isBookmarked(subTopic.id) ? `Remove ${subTopic.title} from bookmarks` : `Add ${subTopic.title} to bookmarks`}
                                                                aria-pressed={isBookmarked(subTopic.id)}
                                                            >
                                                                <i className={`${isBookmarked(subTopic.id) ? 'fas' : 'far'} fa-bookmark`} aria-hidden="true"></i>
                                                            </button>
                                                            <label className="checkbox-label" htmlFor={`checkbox-${subTopic.id}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    id={`checkbox-${subTopic.id}`}
                                                                    className="topic-checkbox"
                                                                    checked={isTopicComplete(subTopic.id)}
                                                                    onChange={(e) => {
                                                                        e.stopPropagation();
                                                                        markTopicComplete(subTopic.id, e.target.checked);
                                                                    }}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                    aria-label={`Mark ${subTopic.title} as ${isTopicComplete(subTopic.id) ? 'incomplete' : 'complete'}`}
                                                                />
                                                                <span className="sr-only">Mark as complete</span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <div
                                        className={`topic-list-item ${activeTopic.id === topic.id ? 'active' : ''}`}
                                        aria-selected={activeTopic.id === topic.id}
                                    >
                                        <div
                                            className="topic-item-content"
                                            onClick={() => handleTopicClick(topic)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    handleTopicClick(topic);
                                                }
                                            }}
                                            tabIndex={0}
                                            role="button"
                                            aria-label={`View ${topic.title}`}
                                        >
                                            <i className={`fas ${topic.icon}`} aria-hidden="true"></i>
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
                                                aria-label={isBookmarked(topic.id) ? `Remove ${topic.title} from bookmarks` : `Add ${topic.title} to bookmarks`}
                                                aria-pressed={isBookmarked(topic.id)}
                                            >
                                                <i className={`${isBookmarked(topic.id) ? 'fas' : 'far'} fa-bookmark`} aria-hidden="true"></i>
                                            </button>
                                            <label className="checkbox-label" htmlFor={`checkbox-${topic.id}`}>
                                                <input
                                                    type="checkbox"
                                                    id={`checkbox-${topic.id}`}
                                                    className="topic-checkbox"
                                                    checked={isTopicComplete(topic.id)}
                                                    onChange={(e) => {
                                                        e.stopPropagation();
                                                        markTopicComplete(topic.id, e.target.checked);
                                                    }}
                                                    onClick={(e) => e.stopPropagation()}
                                                    aria-label={`Mark ${topic.title} as ${isTopicComplete(topic.id) ? 'incomplete' : 'complete'}`}
                                                />
                                                <span className="sr-only">Mark as complete</span>
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <main className="topic-content" aria-live="polite">
                <div className="topic-header">
                    {parentTopic && (
                        <nav className="breadcrumb" aria-label="Breadcrumb">
                            <span className="breadcrumb-item">{parentTopic.title}</span>
                            <i className="fas fa-chevron-right breadcrumb-separator" aria-hidden="true"></i>
                            <span className="breadcrumb-item active" aria-current="page">{activeTopic.title}</span>
                        </nav>
                    )}
                    <h3>{activeTopic.title}</h3>
                    {activeTopic.mindMap && (
                        <div className="view-toggle" role="tablist" aria-label="Content view options">
                            <button
                                onClick={() => setViewMode('normal')}
                                className={viewMode === 'normal' ? 'active' : ''}
                                role="tab"
                                aria-selected={viewMode === 'normal'}
                                aria-controls="content-panel"
                            >
                                <i className="fas fa-align-left" aria-hidden="true"></i> Normal
                            </button>
                            <button
                                onClick={() => setViewMode('mindmap')}
                                className={viewMode === 'mindmap' ? 'active' : ''}
                                role="tab"
                                aria-selected={viewMode === 'mindmap'}
                                aria-controls="content-panel"
                            >
                                <i className="fas fa-project-diagram" aria-hidden="true"></i> Mind Map
                            </button>
                        </div>
                    )}
                </div>

                <div id="content-panel" role="tabpanel">
                    {isLoading ? (
                        <TopicSkeleton />
                    ) : viewMode === 'mindmap' && activeTopic.mindMap ? (
                        <MindMap data={activeTopic.mindMap} />
                    ) : (
                        <>
                            <div
                                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                                className="topic-body"
                            />
                            {activeTopic.code && <CodeBlock code={activeTopic.code} />}
                        </>
                    )}
                </div>
            </main>

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top-button"
                    aria-label="Scroll to top of page"
                >
                    <i className="fas fa-arrow-up" aria-hidden="true"></i>
                </button>
            )}
        </div>
    );
}
