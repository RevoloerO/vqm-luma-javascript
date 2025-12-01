import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { lumaData } from '../pages/data.js';
import { advancedData } from '../pages/advancedData.js';
import './SearchBar.css';

// Build search index from all content (memoized outside component to run once)
const buildSearchIndex = () => {
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

    return items;
};

// Helper to strip HTML tags
const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
};

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [filter, setFilter] = useState('all'); // 'all', 'fundamentals', 'advanced'
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const searchRef = useRef(null);
    const resultRefs = useRef([]);

    // Initialize Fuse with useMemo for better performance
    const fuse = useMemo(() => {
        const searchIndex = buildSearchIndex();
        return new Fuse(searchIndex, {
            keys: ['title', 'content', 'code'],
            threshold: 0.3,
            includeScore: true,
            minMatchCharLength: 2
        });
    }, []); // Empty deps means this only runs once

    // Keyboard shortcuts and navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Open search (Ctrl/Cmd + K)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
                return;
            }

            if (!isOpen) return;

            // Close search (Escape)
            if (e.key === 'Escape') {
                setIsOpen(false);
                setQuery('');
                setSelectedIndex(0);
                return;
            }

            // Navigate results with arrow keys
            if (results.length > 0) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex(prev => {
                        const newIndex = Math.min(prev + 1, results.length - 1);
                        resultRefs.current[newIndex]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                        return newIndex;
                    });
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex(prev => {
                        const newIndex = Math.max(prev - 1, 0);
                        resultRefs.current[newIndex]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                        return newIndex;
                    });
                } else if (e.key === 'Enter' && results[selectedIndex]) {
                    e.preventDefault();
                    handleResultClick(results[selectedIndex].item);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, results, selectedIndex]);

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

    // Search handler (memoized with filter support)
    const handleSearch = useCallback((value) => {
        setQuery(value);
        setSelectedIndex(0); // Reset selected index on new search
        if (value.trim().length >= 2 && fuse) {
            let searchResults = fuse.search(value);

            // Apply filter
            if (filter !== 'all') {
                searchResults = searchResults.filter(result =>
                    result.item.section.toLowerCase() === filter
                );
            }

            setResults(searchResults.slice(0, 8)); // Limit to 8 results
        } else {
            setResults([]);
        }
    }, [fuse, filter]);

    // Navigate to result (memoized)
    const handleResultClick = useCallback((item) => {
        navigate(item.route, { state: { topicId: item.id } });
        setIsOpen(false);
        setQuery('');
        setResults([]);
        setSelectedIndex(0);
        setFilter('all');
    }, [navigate]);

    // Filter change handler
    const handleFilterChange = useCallback((newFilter) => {
        setFilter(newFilter);
        setSelectedIndex(0);
        // Re-run search with new filter
        if (query.trim().length >= 2 && fuse) {
            let searchResults = fuse.search(query);
            if (newFilter !== 'all') {
                searchResults = searchResults.filter(result =>
                    result.item.section.toLowerCase() === newFilter
                );
            }
            setResults(searchResults.slice(0, 8));
        }
    }, [query, fuse]);

    // Highlight matching text (improved to highlight all occurrences)
    const highlightText = (text, query) => {
        if (!query) return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i) =>
            regex.test(part) ? (
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
                            <i className="fas fa-search search-icon"></i>
                            <input
                                ref={inputRef}
                                type="text"
                                className="search-input"
                                placeholder="Search topics, content, and code..."
                                value={query}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="search-close"
                                aria-label="Close search"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        {/* Filter buttons */}
                        <div className="search-filters">
                            <button
                                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('all')}
                            >
                                All
                            </button>
                            <button
                                className={`filter-btn ${filter === 'fundamentals' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('fundamentals')}
                            >
                                <i className="fas fa-book"></i> Fundamentals
                            </button>
                            <button
                                className={`filter-btn ${filter === 'advanced' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('advanced')}
                            >
                                <i className="fas fa-brain"></i> Advanced
                            </button>
                        </div>

                        {results.length > 0 && (
                            <div className="search-results">
                                {results.map(({ item }, index) => (
                                    <div
                                        key={item.id}
                                        ref={el => resultRefs.current[index] = el}
                                        className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                                        onClick={() => handleResultClick(item)}
                                        onMouseEnter={() => setSelectedIndex(index)}
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
                                            {highlightText(item.content.substring(0, 120), query)}...
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {query.trim().length >= 2 && results.length === 0 && (
                            <div className="search-no-results">
                                <i className="fas fa-search"></i>
                                <p>No results found for "{query}"</p>
                                {filter !== 'all' && (
                                    <button onClick={() => handleFilterChange('all')} className="clear-filter-btn">
                                        Clear filter and search all
                                    </button>
                                )}
                            </div>
                        )}

                        {query.trim().length < 2 && (
                            <div className="search-help">
                                <div className="search-help-item">
                                    <kbd>Ctrl</kbd> + <kbd>K</kbd> to open search
                                </div>
                                <div className="search-help-item">
                                    <kbd>↑</kbd> <kbd>↓</kbd> to navigate
                                </div>
                                <div className="search-help-item">
                                    <kbd>Enter</kbd> to select
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
