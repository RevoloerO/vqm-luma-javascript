import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const BookmarkContext = createContext();

const STORAGE_KEY = 'luma_bookmarks';

// Utility functions for localStorage
const loadBookmarks = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Error loading bookmarks:', error);
        return {};
    }
};

const saveBookmarks = (bookmarks) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (error) {
        console.error('Error saving bookmarks:', error);
    }
};

export const BookmarkProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState(loadBookmarks);

    // Save to localStorage whenever bookmarks change
    useEffect(() => {
        saveBookmarks(bookmarks);
    }, [bookmarks]);

    const toggleBookmark = useCallback((topicId, topicData) => {
        setBookmarks(prev => {
            const newBookmarks = { ...prev };
            if (newBookmarks[topicId]) {
                // Remove bookmark
                delete newBookmarks[topicId];
            } else {
                // Add bookmark with metadata
                newBookmarks[topicId] = {
                    title: topicData.title,
                    section: topicData.section,
                    parentTitle: topicData.parentTitle,
                    route: topicData.route,
                    timestamp: new Date().toISOString()
                };
            }
            return newBookmarks;
        });
    }, []);

    const isBookmarked = useCallback((topicId) => {
        return !!bookmarks[topicId];
    }, [bookmarks]);

    const getBookmarks = useCallback(() => {
        return Object.entries(bookmarks).map(([id, data]) => ({
            id,
            ...data
        }));
    }, [bookmarks]);

    const getBookmarkCount = useCallback(() => {
        return Object.keys(bookmarks).length;
    }, [bookmarks]);

    const clearBookmarks = useCallback(() => {
        setBookmarks({});
    }, []);

    const value = useMemo(() => ({
        bookmarks,
        toggleBookmark,
        isBookmarked,
        getBookmarks,
        getBookmarkCount,
        clearBookmarks
    }), [bookmarks, toggleBookmark, isBookmarked, getBookmarks, getBookmarkCount, clearBookmarks]);

    return (
        <BookmarkContext.Provider value={value}>
            {children}
        </BookmarkContext.Provider>
    );
};

export const useBookmarks = () => {
    const context = useContext(BookmarkContext);
    if (!context) {
        throw new Error('useBookmarks must be used within a BookmarkProvider');
    }
    return context;
};
