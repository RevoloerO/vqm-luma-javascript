import React from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { lumaData } from '../pages/data';
import { advancedData } from '../pages/advancedData';
import './StatsPanel.css';

export default function StatsPanel() {
    const { streakData, getTotalCompleted, getUnlockedAchievements, allAchievements } = useProgress();
    const totalCompleted = getTotalCompleted();
    const unlockedAchievements = getUnlockedAchievements(lumaData.fundamentals, advancedData);

    return (
        <div className="stats-panel">
            <h3><i className="fas fa-chart-line"></i> Your Progress</h3>

            <div className="stats-grid">
                {/* Streak Card */}
                <div className="stat-card streak-card">
                    <div className="stat-icon">
                        <i className="fas fa-fire"></i>
                    </div>
                    <div className="stat-content">
                        <div className="stat-value">{streakData.currentStreak}</div>
                        <div className="stat-label">Day Streak</div>
                        {streakData.longestStreak > streakData.currentStreak && (
                            <div className="stat-subtitle">Longest: {streakData.longestStreak} days</div>
                        )}
                    </div>
                </div>

                {/* Topics Completed Card */}
                <div className="stat-card topics-card">
                    <div className="stat-icon">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="stat-content">
                        <div className="stat-value">{totalCompleted}</div>
                        <div className="stat-label">Topics Completed</div>
                    </div>
                </div>

                {/* Achievements Card */}
                <div className="stat-card achievements-card">
                    <div className="stat-icon">
                        <i className="fas fa-trophy"></i>
                    </div>
                    <div className="stat-content">
                        <div className="stat-value">{unlockedAchievements.length} / {allAchievements.length}</div>
                        <div className="stat-label">Achievements</div>
                    </div>
                </div>
            </div>

            {/* Achievements Section */}
            {unlockedAchievements.length > 0 && (
                <div className="achievements-section">
                    <h4><i className="fas fa-award"></i> Unlocked Achievements</h4>
                    <div className="achievements-grid">
                        {unlockedAchievements.map(achievement => (
                            <div key={achievement.id} className="achievement-badge unlocked">
                                <i className={`fas ${achievement.icon}`}></i>
                                <div className="achievement-name">{achievement.name}</div>
                                <div className="achievement-description">{achievement.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Locked Achievements Preview */}
            {allAchievements.length > unlockedAchievements.length && (
                <div className="achievements-section locked-achievements">
                    <h4><i className="fas fa-lock"></i> Locked Achievements</h4>
                    <div className="achievements-grid">
                        {allAchievements
                            .filter(a => !unlockedAchievements.find(ua => ua.id === a.id))
                            .slice(0, 3)
                            .map(achievement => (
                                <div key={achievement.id} className="achievement-badge locked">
                                    <i className={`fas ${achievement.icon}`}></i>
                                    <div className="achievement-name">{achievement.name}</div>
                                    <div className="achievement-description">{achievement.description}</div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}
