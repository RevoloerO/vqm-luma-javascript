import React, { useState } from 'react';
import './HomePage.css';

// --- DATA STRUCTURE FOR TOPICS ---
// This makes it easy to add or modify content in the future.
const lumaData = {
  fundamentals: [
    {
      id: 'vars',
      title: 'Variables & Data Types',
      icon: 'fa-cube',
      description: 'The building blocks of JavaScript.',
      content: `
        <p>In JavaScript, a variable is a container for a value. Before you can use a variable, you need to declare it using one of three keywords: <code>var</code>, <code>let</code>, or <code>const</code>.</p>
        <ul>
          <li><strong>let:</strong> Declares a block-scoped, mutable variable. This is the modern standard.</li>
          <li><strong>const:</strong> Declares a block-scoped, immutable variable. The value cannot be reassigned.</li>
          <li><strong>var:</strong> The old way. It has function scope, not block scope, which can lead to unexpected behavior.</li>
        </ul>
        <p>JavaScript has several primitive data types:</p>
        <ul>
          <li><code>String</code>: Text, like "Hello World".</li>
          <li><code>Number</code>: Both integers and floating-point numbers.</li>
          <li><code>Boolean</code>: <code>true</code> or <code>false</code>.</li>
          <li><code>null</code>: Represents the intentional absence of any object value.</li>
          <li><code>undefined</code>: A variable that has been declared but not assigned a value.</li>
          <li><code>Symbol</code>: A unique and immutable primitive value.</li>
          <li><code>BigInt</code>: For numbers larger than the standard <code>Number</code> type can hold.</li>
        </ul>
      `,
      code: `
let message = "Hello, LUMA!"; // String
const year = 2025; // Number
let isLearning = true; // Boolean

console.log(typeof message); // "string"
console.log(typeof year); // "number"
console.log(typeof isLearning); // "boolean"
      `
    },
    {
      id: 'async',
      title: 'Async JS',
      icon: 'fa-bolt',
      description: 'Handling operations like API calls.',
      content: `
        <p>Asynchronous JavaScript is crucial for non-blocking operations, like fetching data from a server. The modern way to handle this is with <code>async/await</code>, which is syntactic sugar over Promises.</p>
        <p>An <code>async</code> function always returns a Promise. The <code>await</code> keyword can only be used inside an <code>async</code> function and it pauses the execution of the function until the Promise is resolved or rejected.</p>
      `,
      code: `
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

fetchData();
      `
    }
  ],
  advanced: [
    {
      id: 'closures',
      title: 'Closures',
      icon: 'fa-lock',
      description: 'A core concept for encapsulation.',
      content: `
        <p>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.</p>
        <p>Closures are created every time a function is created, at function creation time. They are commonly used for data privacy and creating factory functions.</p>
      `,
      code: `
function createCounter() {
  let count = 0; // This variable is "closed over"

  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1 (it has its own scope)
      `
    },
    {
      id: 'prototypes',
      title: 'Prototypal Inheritance',
      icon: 'fa-sitemap',
      description: 'How objects inherit from each other.',
       content: `
        <p>JavaScript is a prototype-based language. When we call a method or property on an object, JavaScript first checks if the object has it. If not, it looks at the object's prototype. This continues up the "prototype chain" until the property is found or the chain ends (at <code>Object.prototype</code>).</p>
        <p>While modern JavaScript uses the <code>class</code> keyword, this is just syntactic sugar over the underlying prototypal inheritance model.</p>
      `,
      code: `
// Constructor function
function Dog(name) {
  this.name = name;
}

// Add a method to the prototype
Dog.prototype.bark = function() {
  console.log('Woof! My name is ' + this.name);
};

const myDog = new Dog('Rex');
myDog.bark(); // Woof! My name is Rex

// myDog doesn't have a 'bark' method, 
// but its prototype (Dog.prototype) does.
      `
    }
  ]
};

// --- SUB-COMPONENTS ---

const CodeBlock = ({ code }) => (
    <div className="code-block">
        <pre><code>{code.trim()}</code></pre>
    </div>
);

const LaunchPad = ({ navigateTo }) => (
    <div className="home-container">
        <header className="home-header">
            <h1>LUMA</h1>
            <p>Learn, Uncover, Master, Archive</p>
        </header>
        <div className="nav-cards">
            <div className="nav-card" onClick={() => navigateTo('fundamentals')}>
                <i className="fas fa-book"></i>
                <h2>Fundamentals</h2>
                <p>Start with the core concepts. Essential for every JavaScript developer.</p>
            </div>
            <div className="nav-card" onClick={() => navigateTo('advanced')}>
                <i className="fas fa-brain"></i>
                <h2>Advanced Topics</h2>
                <p>Explore complex patterns, features, and best practices to level up.</p>
            </div>
            <div className="nav-card" onClick={() => navigateTo('exercises')}>
                <i className="fas fa-keyboard"></i>
                <h2>Exercises</h2>
                <p>Solidify your knowledge with hands-on coding challenges.</p>
            </div>
        </div>
    </div>
);

const TopicPage = ({ section, goHome }) => {
    const [activeTopic, setActiveTopic] = useState(section.data[0]);

    return (
        <div className="topic-page-container">
            <aside className="topic-sidebar">
                <button className="back-button" onClick={goHome}>
                    <i className="fas fa-arrow-left"></i> Back to Home
                </button>
                <h2>{section.title}</h2>
                <ul className="topic-list">
                    {section.data.map(topic => (
                        <li 
                            key={topic.id} 
                            className={`topic-list-item ${activeTopic.id === topic.id ? 'active' : ''}`}
                            onClick={() => setActiveTopic(topic)}
                        >
                            <i className={`fas ${topic.icon}`} style={{ marginRight: '10px', width: '20px' }}></i>
                            {topic.title}
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="topic-content">
                <h3>{activeTopic.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: activeTopic.content }} />
                {activeTopic.code && <CodeBlock code={activeTopic.code} />}
            </main>
        </div>
    );
};

const ExercisesPage = ({ goHome }) => (
    <div style={{textAlign: 'center', width: '100%'}}>
        <button className="back-button" onClick={goHome} style={{float: 'left'}}>
            <i className="fas fa-arrow-left"></i> Back to Home
        </button>
        <div style={{clear: 'both', paddingTop: '2rem'}}>
             <h2><i className="fas fa-keyboard"></i> Coding Exercises</h2>
             <p>This section is under construction. Coming soon!</p>
        </div>
    </div>
);


// --- MAIN HOMEPAGE COMPONENT ---
export default function HomePage() {
    const [view, setView] = useState('home');

    const navigateTo = (newView) => {
        setView(newView);
    };
    
    const goHome = () => setView('home');

    const renderContent = () => {
        switch (view) {
            case 'fundamentals':
                return <TopicPage section={{ title: 'Fundamentals', data: lumaData.fundamentals }} goHome={goHome} />;
            case 'advanced':
                return <TopicPage section={{ title: 'Advanced Topics', data: lumaData.advanced }} goHome={goHome} />;
            case 'exercises':
                return <ExercisesPage goHome={goHome} />;
            case 'home':
            default:
                return <LaunchPad navigateTo={navigateTo} />;
        }
    };

    return (
        <div className="luma-app">
            {renderContent()}
        </div>
    );
}
