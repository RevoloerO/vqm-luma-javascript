import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import './CodePlayground.css';

export default function CodePlayground({
    initialCode = '// Write your JavaScript code here\nconsole.log("Hello, World!");',
    testCases = [],
    onValidate = null,
    theme = 'dark'
}) {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [testResults, setTestResults] = useState(null);

    const handleEditorChange = (value) => {
        setCode(value);
    };

    const runCode = () => {
        setIsRunning(true);
        setOutput('');
        setTestResults(null);

        // Capture console.log output
        const logs = [];
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;

        console.log = (...args) => {
            logs.push(args.map(arg =>
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
        };

        console.error = (...args) => {
            logs.push('ERROR: ' + args.map(arg => String(arg)).join(' '));
        };

        console.warn = (...args) => {
            logs.push('WARNING: ' + args.map(arg => String(arg)).join(' '));
        };

        try {
            // Create a function from the code and execute it
            const func = new Function(code);
            func();

            // Run test cases if provided
            if (testCases.length > 0 && onValidate) {
                const results = onValidate(code);
                setTestResults(results);
            }

            setOutput(logs.length > 0 ? logs.join('\n') : 'Code executed successfully (no output)');
        } catch (error) {
            setOutput(`Error: ${error.message}\n\nStack trace:\n${error.stack}`);
        } finally {
            // Restore original console methods
            console.log = originalLog;
            console.error = originalError;
            console.warn = originalWarn;
            setIsRunning(false);
        }
    };

    const resetCode = () => {
        setCode(initialCode);
        setOutput('');
        setTestResults(null);
    };

    const monacoTheme = theme === 'dark' ? 'vs-dark' : 'light';

    return (
        <div className="code-playground">
            <div className="playground-header">
                <h4><i className="fas fa-code"></i> Interactive Code Editor</h4>
                <div className="playground-controls">
                    <button onClick={resetCode} className="reset-btn" aria-label="Reset code">
                        <i className="fas fa-undo"></i> Reset
                    </button>
                    <button
                        onClick={runCode}
                        className="run-btn"
                        disabled={isRunning}
                        aria-label="Run code"
                    >
                        <i className={isRunning ? 'fas fa-spinner fa-spin' : 'fas fa-play'}></i>
                        {isRunning ? 'Running...' : 'Run Code'}
                    </button>
                </div>
            </div>

            <div className="editor-container">
                <Editor
                    height="300px"
                    defaultLanguage="javascript"
                    value={code}
                    onChange={handleEditorChange}
                    theme={monacoTheme}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: 'on',
                        roundedSelection: false,
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        tabSize: 2,
                        wordWrap: 'on',
                    }}
                />
            </div>

            {output && (
                <div className="output-container">
                    <div className="output-header">
                        <i className="fas fa-terminal"></i> Output
                    </div>
                    <pre className="output-content">{output}</pre>
                </div>
            )}

            {testResults && (
                <div className="test-results">
                    <div className="test-header">
                        <i className="fas fa-check-circle"></i> Test Results
                    </div>
                    <div className="test-cases">
                        {testResults.map((result, index) => (
                            <div key={index} className={`test-case ${result.passed ? 'passed' : 'failed'}`}>
                                <i className={`fas ${result.passed ? 'fa-check' : 'fa-times'}`}></i>
                                <span>{result.description}</span>
                                {!result.passed && result.error && (
                                    <div className="test-error">{result.error}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
