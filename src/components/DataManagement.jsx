import React, { useState, useRef } from 'react';
import { useProgress } from '../contexts/ProgressContext.jsx';
import './DataManagement.css';

/**
 * Component for managing user data (export/import progress and bookmarks)
 */
const DataManagement = () => {
    const { exportData, importData, resetProgress, getLearningStats } = useProgress();
    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [showConfirmReset, setShowConfirmReset] = useState(false);
    const fileInputRef = useRef(null);

    const stats = getLearningStats();

    const handleExport = () => {
        setIsProcessing(true);
        const result = exportData();
        setMessage(result);
        setIsProcessing(false);
        setTimeout(() => setMessage(null), 3000);
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsProcessing(true);
        const result = await importData(file);
        setMessage(result);
        setIsProcessing(false);

        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }

        setTimeout(() => setMessage(null), 4000);

        // Reload page to reflect imported data
        if (result.success) {
            setTimeout(() => window.location.reload(), 1500);
        }
    };

    const handleReset = () => {
        resetProgress();
        localStorage.removeItem('luma_bookmarks');
        setShowConfirmReset(false);
        setMessage({ success: true, message: 'All progress has been reset.' });
        setTimeout(() => {
            setMessage(null);
            window.location.reload();
        }, 1500);
    };

    return (
        <div className="data-management">
            <div className="data-management-header">
                <h3>
                    <i className="fas fa-database" aria-hidden="true"></i>
                    Data Management
                </h3>
                <p className="data-management-description">
                    Export your progress to a file for backup, or import from a previous export.
                </p>
            </div>

            {/* Learning Stats */}
            <div className="learning-stats">
                <div className="stat-item">
                    <span className="stat-value">{stats.totalCompleted}</span>
                    <span className="stat-label">Topics Completed</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">{stats.learningStreak}</span>
                    <span className="stat-label">Day Streak</span>
                </div>
                {stats.lastCompletedDate && (
                    <div className="stat-item">
                        <span className="stat-value">
                            {new Date(stats.lastCompletedDate).toLocaleDateString()}
                        </span>
                        <span className="stat-label">Last Activity</span>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="data-actions">
                <button
                    className="data-button export-button"
                    onClick={handleExport}
                    disabled={isProcessing}
                    aria-label="Export progress and bookmarks to JSON file"
                >
                    <i className="fas fa-download" aria-hidden="true"></i>
                    Export Data
                </button>

                <button
                    className="data-button import-button"
                    onClick={handleImportClick}
                    disabled={isProcessing}
                    aria-label="Import progress and bookmarks from JSON file"
                >
                    <i className="fas fa-upload" aria-hidden="true"></i>
                    Import Data
                </button>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".json"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                />

                <button
                    className="data-button reset-button"
                    onClick={() => setShowConfirmReset(true)}
                    disabled={isProcessing}
                    aria-label="Reset all progress and bookmarks"
                >
                    <i className="fas fa-trash-alt" aria-hidden="true"></i>
                    Reset All
                </button>
            </div>

            {/* Confirmation Dialog */}
            {showConfirmReset && (
                <div className="confirm-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
                    <div className="confirm-dialog">
                        <h4 id="confirm-title">
                            <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>
                            Confirm Reset
                        </h4>
                        <p>Are you sure you want to reset all your progress and bookmarks? This action cannot be undone.</p>
                        <div className="confirm-actions">
                            <button
                                className="confirm-button cancel"
                                onClick={() => setShowConfirmReset(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="confirm-button danger"
                                onClick={handleReset}
                            >
                                Yes, Reset Everything
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Status Message */}
            {message && (
                <div
                    className={`data-message ${message.success ? 'success' : 'error'}`}
                    role="alert"
                    aria-live="polite"
                >
                    <i className={`fas ${message.success ? 'fa-check-circle' : 'fa-exclamation-circle'}`} aria-hidden="true"></i>
                    {message.message}
                </div>
            )}
        </div>
    );
};

export default DataManagement;
