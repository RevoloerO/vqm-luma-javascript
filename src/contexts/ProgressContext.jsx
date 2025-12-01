import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const ProgressContext = createContext();

const STORAGE_KEY = 'luma_progress';
const STREAK_KEY = 'luma_streak';

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

const loadStreakData = () => {
    try {
        const stored = localStorage.getItem(STREAK_KEY);
        return stored ? JSON.parse(stored) : { currentStreak: 0, longestStreak: 0, lastVisit: null };
    } catch (error) {
        console.error('Error loading streak:', error);
        return { currentStreak: 0, longestStreak: 0, lastVisit: null };
    }
};

const saveStreakData = (streakData) => {
    try {
        localStorage.setItem(STREAK_KEY, JSON.stringify(streakData));
    } catch (error) {
        console.error('Error saving streak:', error);
    }
};

// Achievement definitions
const ACHIEVEMENTS = [
    { id: 'first_step', name: 'First Step', description: 'Complete your first topic', threshold: 1, icon: 'fa-star' },
    { id: 'getting_started', name: 'Getting Started', description: 'Complete 5 topics', threshold: 5, icon: 'fa-fire' },
    { id: 'dedicated_learner', name: 'Dedicated Learner', description: 'Complete 10 topics', threshold: 10, icon: 'fa-trophy' },
    { id: 'knowledge_seeker', name: 'Knowledge Seeker', description: 'Complete 25 topics', threshold: 25, icon: 'fa-medal' },
    { id: 'master_student', name: 'Master Student', description: 'Complete 50 topics', threshold: 50, icon: 'fa-crown' },
    { id: 'week_warrior', name: 'Week Warrior', description: '7 day learning streak', threshold: 7, type: 'streak', icon: 'fa-calendar-check' },
    { id: 'fundamentals_complete', name: 'Fundamentals Master', description: 'Complete all Fundamentals', type: 'section', section: 'fundamentals', icon: 'fa-book' },
    { id: 'advanced_complete', name: 'Advanced Expert', description: 'Complete all Advanced topics', type: 'section', section: 'advanced', icon: 'fa-brain' },
];

export const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState(loadProgress);
    const [streakData, setStreakData] = useState(loadStreakData);

    // Update streak on mount and when topics are completed
    useEffect(() => {
        updateStreak();
    }, []);

    // Save to localStorage whenever progress changes
    useEffect(() => {
        saveProgress(progress);
    }, [progress]);

    // Save streak data
    useEffect(() => {
        saveStreakData(streakData);
    }, [streakData]);

    const updateStreak = useCallback(() => {
        const today = new Date().toDateString();
        const lastVisit = streakData.lastVisit;

        if (!lastVisit) {
            // First visit
            setStreakData({ currentStreak: 1, longestStreak: 1, lastVisit: today });
            return;
        }

        const lastVisitDate = new Date(lastVisit);
        const todayDate = new Date(today);
        const daysDiff = Math.floor((todayDate - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysDiff === 0) {
            // Same day, no change
            return;
        } else if (daysDiff === 1) {
            // Consecutive day
            const newStreak = streakData.currentStreak + 1;
            setStreakData({
                currentStreak: newStreak,
                longestStreak: Math.max(newStreak, streakData.longestStreak),
                lastVisit: today
            });
        } else {
            // Streak broken
            setStreakData({
                currentStreak: 1,
                longestStreak: streakData.longestStreak,
                lastVisit: today
            });
        }
    }, [streakData]);

    const markTopicComplete = useCallback((topicId, completed = true) => {
        setProgress(prev => ({
            ...prev,
            [topicId]: {
                completed,
                timestamp: new Date().toISOString()
            }
        }));
        updateStreak();
    }, [updateStreak]);

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
    }, [progress]);

    // Get total completed topics count
    const getTotalCompleted = useCallback(() => {
        return Object.values(progress).filter(p => p.completed).length;
    }, [progress]);

    // Get unlocked achievements
    const getUnlockedAchievements = useCallback((fundamentalsData, advancedData) => {
        const totalCompleted = getTotalCompleted();
        const fundamentalsStats = getCompletionStats(fundamentalsData);
        const advancedStats = getCompletionStats(advancedData);

        return ACHIEVEMENTS.filter(achievement => {
            if (achievement.type === 'streak') {
                return streakData.currentStreak >= achievement.threshold;
            } else if (achievement.type === 'section') {
                if (achievement.section === 'fundamentals') {
                    return fundamentalsStats.percentage === 100;
                } else if (achievement.section === 'advanced') {
                    return advancedStats.percentage === 100;
                }
            } else {
                // Topic count achievements
                return totalCompleted >= achievement.threshold;
            }
            return false;
        });
    }, [getTotalCompleted, getCompletionStats, streakData]);

    const value = useMemo(() => ({
        progress,
        markTopicComplete,
        isTopicComplete,
        resetProgress,
        getCompletionStats,
        getTotalCompleted,
        streakData,
        getUnlockedAchievements,
        allAchievements: ACHIEVEMENTS
    }), [progress, markTopicComplete, isTopicComplete, resetProgress, getCompletionStats, getTotalCompleted, streakData, getUnlockedAchievements]);

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
