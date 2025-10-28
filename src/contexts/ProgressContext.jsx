import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

const STORAGE_KEY = 'luma_progress';

// Utility functions for localStorage
const loadProgress = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Error loading progress:', error);
        return {};
    }
};

const saveProgress = (progress) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error('Error saving progress:', error);
    }
};

export const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState(loadProgress);

    // Save to localStorage whenever progress changes
    useEffect(() => {
        saveProgress(progress);
    }, [progress]);

    const markTopicComplete = (topicId, completed = true) => {
        setProgress(prev => ({
            ...prev,
            [topicId]: {
                completed,
                timestamp: new Date().toISOString()
            }
        }));
    };

    const isTopicComplete = (topicId) => {
        return progress[topicId]?.completed || false;
    };

    const resetProgress = () => {
        setProgress({});
    };

    const getCompletionStats = (topics) => {
        if (!topics || topics.length === 0) return { completed: 0, total: 0, percentage: 0 };

        let total = 0;
        let completed = 0;

        topics.forEach(topic => {
            if (topic.subTopics) {
                topic.subTopics.forEach(subTopic => {
                    total++;
                    if (isTopicComplete(subTopic.id)) completed++;
                });
            } else {
                total++;
                if (isTopicComplete(topic.id)) completed++;
            }
        });

        return {
            completed,
            total,
            percentage: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    };

    const value = {
        progress,
        markTopicComplete,
        isTopicComplete,
        resetProgress,
        getCompletionStats
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};

export const useProgress = () => {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
};
