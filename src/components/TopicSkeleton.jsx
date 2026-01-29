import React from 'react';
import './TopicSkeleton.css';

/**
 * Loading skeleton component for topic content
 * Displays animated placeholder while content is loading
 */
const TopicSkeleton = () => {
    return (
        <div className="topic-skeleton" aria-busy="true" aria-label="Loading content">
            <div className="skeleton-header">
                <div className="skeleton-title"></div>
                <div className="skeleton-badge"></div>
            </div>
            <div className="skeleton-content">
                <div className="skeleton-paragraph">
                    <div className="skeleton-line skeleton-line-full"></div>
                    <div className="skeleton-line skeleton-line-full"></div>
                    <div className="skeleton-line skeleton-line-medium"></div>
                </div>
                <div className="skeleton-paragraph">
                    <div className="skeleton-line skeleton-line-full"></div>
                    <div className="skeleton-line skeleton-line-long"></div>
                    <div className="skeleton-line skeleton-line-full"></div>
                    <div className="skeleton-line skeleton-line-short"></div>
                </div>
                <div className="skeleton-code-block"></div>
                <div className="skeleton-paragraph">
                    <div className="skeleton-line skeleton-line-medium"></div>
                    <div className="skeleton-line skeleton-line-full"></div>
                    <div className="skeleton-line skeleton-line-long"></div>
                </div>
            </div>
        </div>
    );
};

export default TopicSkeleton;
