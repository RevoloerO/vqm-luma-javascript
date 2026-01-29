import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { lumaData } from '../pages/data.js';
import { advancedData } from '../pages/advancedData.js';
import { stripHtml } from '../utils/sanitize.js';
import './SearchBar.css';

// Cache for search index to avoid rebuilding
let cachedSearchIndex = null;

// Build search index from all content
const buildSearchIndex = () => {
    if (cachedSearchIndex) return cachedSearchIndex;

    const items = [];

    // Add fundamentals topics
    lumaData.fundamentals.forEach(topic => {
        if (topic.subTopics) {
            topic.subTopics.forEach(subTopic => {
                items.push({
                    id: subTopic.id,
                    title: subTopic.title,
                    content: stripHtml(subTopic.content || ''),
                    code: subTopic.code || '',
                    section: 'Fundamentals',
                    parentTitle: topic.title,
                    route: '/vqm-luma-javascript/fundamentals'
                });
            });
        } else {
            items.push({
                id: topic.id,
                title: topic.title,
                content: stripHtml(topic.content || ''),
                code: topic.code || '',
                section: 'Fundamentals',
                route: '/vqm-luma-javascript/fundamentals'
            });
        }
    });

    // Add advanced topics
    advancedData.forEach(topic => {
        if (topic.subTopics) {
            topic.subTopics.forEach(subTopic => {
                items.push({
                    id: subTopic.id,
                    title: subTopic.title,
                    content: stripHtml(subTopic.content || ''),
                    code: subTopic.code || '',
                    section: 'Advanced',
                    parentTitle: topic.title,
                    route: '/vqm-luma-javascript/advanced'
                });
            });
        } else {
            items.push({
                id: topic.id,
                title: topic.title,
                content: stripHtml(topic.content || ''),
                code: topic.code || '',
                section: 'Advanced',
                route: '/vqm-luma-javascript/advanced'
            });
        }
    });

    cachedSearchIndex = items;
    return items;
};

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const searchRef = useRef(null);

    // Initialize Fuse
    const fuseRef = useRef(null);
    useEffect(() => {
        const searchIndex = buildSearchIndex();
        fuseRef.current = new Fuse(searchIndex, {
            keys: ['title', 'content', 'code'],
            threshold: 0.3,
            includeScore: true,
            minMatchCharLength: 2
        });
    }, []);

    // Keyboard shortcut (Ctrl/Cmd + K)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
                setQuery('');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen]);

    // Search handler
    const handleSearch = (value) => {
        setQuery(value);
        if (value.trim().length >= 2 && fuseRef.current) {
            const searchResults = fuseRef.current.search(value);
            setResults(searchResults.slice(0, 8)); // Limit to 8 results
        } else {
            setResults([]);
        }
    };

    // Navigate to result
    const handleResultClick = (item) => {
        navigate(item.route, { state: { topicId: item.id } });
        setIsOpen(false);
        setQuery('');
        setResults([]);
    };

    // Highlight matching text
    const highlightText = (text, query) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <mark key={i}>{part}</mark>
            ) : (
                part
            )
        );
    };

    return (
        <>
            {/* Search trigger button */}
            <button
                onClick={() => setIsOpen(true)}
                className="search-trigger"
                aria-label="Search"
            >
                <i className="fas fa-search"></i>
                <span className="search-hint">Search (Ctrl+K)</span>
            </button>

            {/* Search modal */}
            {isOpen && (
                <div className="search-overlay">
                    <div className="search-modal" ref={searchRef}>
                        <div className="search-input-container">
                            <i className="fas fa-search search-icon" aria-hidden="true"></i>
                            <label htmlFor="search-input" className="sr-only">
                                Search topics, content, and code
                            </label>
                            <input
                                ref={inputRef}
                                id="search-input"
                                type="text"
                                className="search-input"
                                placeholder="Search topics, content, and code..."
                                value={query}
                                onChange={(e) => handleSearch(e.target.value)}
                                aria-label="Search topics, content, and code"
                                aria-describedby="search-help"
                                autoComplete="off"
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="search-close"
                                aria-label="Close search"
                            >
                                <i className="fas fa-times" aria-hidden="true"></i>
                            </button>
                        </div>

                        {results.length > 0 && (
                            <div className="search-results">
                                {results.map(({ item }) => (
                                    <div
                                        key={item.id}
                                        className="search-result-item"
                                        onClick={() => handleResultClick(item)}
                                    >
                                        <div className="result-header">
                                            <span className="result-title">
                                                {highlightText(item.title, query)}
                                            </span>
                                            <span className="result-section">{item.section}</span>
                                        </div>
                                        {item.parentTitle && (
                                            <div className="result-breadcrumb">
                                                {item.parentTitle} → {item.title}
                                            </div>
                                        )}
                                        <div className="result-preview">
                                            {item.content.substring(0, 120)}...
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {query.trim().length >= 2 && results.length === 0 && (
                            <div className="search-no-results">
                                <i className="fas fa-search"></i>
                                <p>No results found for "{query}"</p>
                            </div>
                        )}

                        {query.trim().length < 2 && (
                            <div className="search-help" id="search-help">
                                <div className="search-help-item">
                                    <kbd>Ctrl</kbd> + <kbd>K</kbd> to open search
                                </div>
                                <div className="search-help-item">
                                    <kbd>Esc</kbd> to close
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchBar;
