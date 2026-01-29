import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ProgressContext = createContext();

const PROGRESS_STORAGE_KEY = 'luma_progress';
const BOOKMARKS_STORAGE_KEY = 'luma_bookmarks';

// Utility functions for localStorage
const loadProgress = () => {
    try {
        const stored = localStorage.getItem(PROGRESS_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Error loading progress:', error);
        return {};
    }
};

const saveProgress = (progress) => {
    try {
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
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

    const markTopicComplete = useCallback((topicId, completed = true) => {
        setProgress(prev => ({
            ...prev,
            [topicId]: {
                completed,
                timestamp: new Date().toISOString()
            }
        }));
    }, []);

    const isTopicComplete = useCallback((topicId) => {
        return progress[topicId]?.completed || false;
    }, [progress]);

    const resetProgress = useCallback(() => {
        setProgress({});
    }, []);

    const getCompletionStats = useCallback((topics) => {
        if (!topics || topics.length === 0) return { completed: 0, total: 0, percentage: 0 };

        let total = 0;
        let completed = 0;

        topics.forEach(topic => {
            if (topic.subTopics) {
                topic.subTopics.forEach(subTopic => {
                    total++;
                    if (progress[subTopic.id]?.completed) completed++;
                });
            } else {
                total++;
                if (progress[topic.id]?.completed) completed++;
            }
        });

        return {
            completed,
            total,
            percentage: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    }, [progress]);

    /**
     * Export all user data (progress + bookmarks) as a JSON file
     */
    const exportData = useCallback(() => {
        try {
            const bookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
            const exportData = {
                version: '1.0',
                exportDate: new Date().toISOString(),
                progress: progress,
                bookmarks: bookmarks ? JSON.parse(bookmarks) : {}
            };

            const dataStr = JSON.stringify(exportData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `luma-progress-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            return { success: true, message: 'Data exported successfully!' };
        } catch (error) {
            console.error('Error exporting data:', error);
            return { success: false, message: 'Failed to export data. Please try again.' };
        }
    }, [progress]);

    /**
     * Import user data from a JSON file
     * @param {File} file - The JSON file to import
     * @returns {Promise<{success: boolean, message: string}>}
     */
    const importData = useCallback((file) => {
        return new Promise((resolve) => {
            if (!file) {
                resolve({ success: false, message: 'No file selected.' });
                return;
            }

            if (!file.name.endsWith('.json')) {
                resolve({ success: false, message: 'Please select a valid JSON file.' });
                return;
            }

            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);

                    // Validate the imported data structure
                    if (!importedData.progress || typeof importedData.progress !== 'object') {
                        resolve({ success: false, message: 'Invalid file format: missing progress data.' });
                        return;
                    }

                    // Import progress
                    setProgress(importedData.progress);

                    // Import bookmarks if present
                    if (importedData.bookmarks && typeof importedData.bookmarks === 'object') {
                        localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(importedData.bookmarks));
                    }

                    resolve({
                        success: true,
                        message: `Data imported successfully! Restored ${Object.keys(importedData.progress).length} topic(s) progress.`
                    });
                } catch (error) {
                    console.error('Error parsing import file:', error);
                    resolve({ success: false, message: 'Failed to parse the file. Please ensure it\'s a valid LUMA export file.' });
                }
            };

            reader.onerror = () => {
                resolve({ success: false, message: 'Failed to read the file. Please try again.' });
            };

            reader.readAsText(file);
        });
    }, []);

    /**
     * Get statistics about the user's learning journey
     */
    const getLearningStats = useCallback(() => {
        const completedTopics = Object.entries(progress).filter(([, data]) => data.completed);
        const timestamps = completedTopics
            .map(([, data]) => new Date(data.timestamp))
            .filter(date => !isNaN(date.getTime()));

        if (timestamps.length === 0) {
            return {
                totalCompleted: 0,
                firstCompletedDate: null,
                lastCompletedDate: null,
                learningStreak: 0
            };
        }

        timestamps.sort((a, b) => a - b);

        // Calculate learning streak (consecutive days with at least one completion)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const uniqueDays = [...new Set(timestamps.map(d => {
            const day = new Date(d);
            day.setHours(0, 0, 0, 0);
            return day.getTime();
        }))].sort((a, b) => b - a);

        let streak = 0;
        let currentDay = today.getTime();

        for (const dayTime of uniqueDays) {
            const diff = (currentDay - dayTime) / (1000 * 60 * 60 * 24);
            if (diff <= 1) {
                streak++;
                currentDay = dayTime;
            } else {
                break;
            }
        }

        return {
            totalCompleted: completedTopics.length,
            firstCompletedDate: timestamps[0],
            lastCompletedDate: timestamps[timestamps.length - 1],
            learningStreak: streak
        };
    }, [progress]);

    const value = {
        progress,
        markTopicComplete,
        isTopicComplete,
        resetProgress,
        getCompletionStats,
        exportData,
        importData,
        getLearningStats
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
