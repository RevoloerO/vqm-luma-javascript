import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeBlock.css';

export default function CodeBlock({ code, language = 'javascript', theme = 'dark', showLineNumbers = true }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    const style = theme === 'dark' ? vscDarkPlus : vs;

    return (
        <div className="code-block-wrapper">
            <div className="code-block-header">
                <span className="code-language">{language}</span>
                <button
                    className={`copy-button ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                    aria-label="Copy code to clipboard"
                >
                    <i className={copied ? 'fas fa-check' : 'fas fa-copy'}></i>
                    <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
            </div>
            <SyntaxHighlighter
                language={language}
                style={style}
                showLineNumbers={showLineNumbers}
                customStyle={{
                    margin: 0,
                    borderRadius: '0 0 8px 8px',
                    fontSize: '0.9rem',
                    padding: '1.5rem'
                }}
                wrapLongLines={true}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}
