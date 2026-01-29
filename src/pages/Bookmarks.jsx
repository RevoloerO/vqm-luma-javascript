import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookmarks } from '../contexts/BookmarkContext.jsx';
import DataManagement from '../components/DataManagement.jsx';
import './Bookmarks.css';

export default function Bookmarks() {
    const navigate = useNavigate();
    const { getBookmarks, toggleBookmark, getBookmarkCount } = useBookmarks();
    const bookmarks = getBookmarks();

    // Sort bookmarks by timestamp (most recent first)
    const sortedBookmarks = bookmarks.sort((a, b) =>
        new Date(b.timestamp) - new Date(a.timestamp)
    );

    // Group bookmarks by section
    const groupedBookmarks = sortedBookmarks.reduce((acc, bookmark) => {
        if (!acc[bookmark.section]) {
            acc[bookmark.section] = [];
        }
        acc[bookmark.section].push(bookmark);
        return acc;
    }, {});

    const handleBookmarkClick = (bookmark) => {
        navigate(bookmark.route, { state: { topicId: bookmark.id } });
    };

    const handleRemoveBookmark = (e, bookmarkId) => {
        e.stopPropagation();
        // Remove bookmark (toggle with empty data will delete it)
        toggleBookmark(bookmarkId, {});
    };

    return (
        <div className="bookmarks-page">
            <button className="back-button" onClick={() => navigate('/vqm-luma-javascript/')}>
                <i className="fas fa-arrow-left"></i> Back to Home
            </button>

            <div className="bookmarks-container">
                <header className="bookmarks-header">
                    <div>
                        <h1>
                            <i className="fas fa-bookmark"></i> My Bookmarks
                        </h1>
                        <p className="bookmarks-count">
                            {getBookmarkCount()} bookmark{getBookmarkCount() !== 1 ? 's' : ''} saved
                        </p>
                    </div>
                </header>

                {sortedBookmarks.length === 0 ? (
                    <div className="bookmarks-empty">
                        <i className="fas fa-bookmark"></i>
                        <h2>No Bookmarks Yet</h2>
                        <p>Click the bookmark icon next to any topic to save it here for quick access.</p>
                        <button className="cta-button" onClick={() => navigate('/vqm-luma-javascript/fundamentals')}>
                            Browse Fundamentals
                        </button>
                    </div>
                ) : (
                    <div className="bookmarks-sections">
                        {Object.entries(groupedBookmarks).map(([section, items]) => (
                            <div key={section} className="bookmark-section">
                                <h2 className="section-title">
                                    <i className={`fas ${section === 'Fundamentals' ? 'fa-book' : 'fa-brain'}`}></i>
                                    {section}
                                    <span className="section-count">{items.length}</span>
                                </h2>
                                <div className="bookmark-grid">
                                    {items.map(bookmark => (
                                        <div
                                            key={bookmark.id}
                                            className="bookmark-card"
                                            onClick={() => handleBookmarkClick(bookmark)}
                                        >
                                            <div className="bookmark-card-header">
                                                <h3 className="bookmark-title">{bookmark.title}</h3>
                                                <button
                                                    className="remove-bookmark"
                                                    onClick={(e) => handleRemoveBookmark(e, bookmark.id)}
                                                    aria-label="Remove bookmark"
                                                >
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                            {bookmark.parentTitle && (
                                                <div className="bookmark-breadcrumb">
                                                    {bookmark.parentTitle} → {bookmark.title}
                                                </div>
                                            )}
                                            <div className="bookmark-footer">
                                                <span className="bookmark-section-badge">{section}</span>
                                                <span className="bookmark-date">
                                                    {new Date(bookmark.timestamp).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Data Management Section */}
                <DataManagement />
            </div>
        </div>
    );
}
