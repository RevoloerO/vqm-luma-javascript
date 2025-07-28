import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Exercises.css';

const exercisesData = [
    {
        id: 'foundational',
        title: 'Section 6.1: Foundational Exercises',
        description: 'Small, targeted coding challenges to reinforce core language features. They provide immediate feedback and build confidence with fundamental syntax and logic.',
        items: [
            { 
                id: 'ex1', 
                title: 'The Fortune Teller', 
                task: "Store a number of children, a partner's name, a location, and a job title in variables. Output a sentence like: \"You will be a [job title] in [location], and married to [partner's name] with [number] kids.\"", 
                hint1: 'You will need four different variables. What are the best names for them?',
                hint2: 'To combine strings and variables, look into template literals (using backticks ``) for an easy way to build the final sentence.',
                solution: {
                    code: 'const numKids = 5;\nconst partnerName = "David Beckham";\nconst location = "Costa Rica";\nconst jobTitle = "web developer";\n\nconst fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numKids} kids.`;\nconsole.log(fortune);',
                    explanation: 'This solution uses `const` for variables that do not change. A template literal (``) is used to embed the variables directly into the string, which is cleaner than traditional string concatenation with "+".'
                }
            },
            { 
                id: 'ex2', 
                title: 'The Age Calculator', 
                task: 'Store a birth year and a future year in variables. Calculate the two possible ages for that year and output them.',
                hint1: 'The primary calculation is simply subtracting the birth year from the future year.',
                hint2: 'Why are there two possible ages? Because it depends on whether the person has had their birthday in the future year yet. The second age will be one less than the first.',
                solution: {
                    code: 'const birthYear = 1990;\nconst futureYear = 2045;\n\nconst age1 = futureYear - birthYear;\nconst age2 = age1 - 1;\n\nconsole.log(`You will be either ${age2} or ${age1} in ${futureYear}.`);',
                    explanation: 'We calculate the maximum possible age by simple subtraction. The other possible age is one less than that, accounting for the time before their birthday in the target year.'
                }
            },
            { 
                id: 'ex3', 
                title: 'The Lifetime Supply Calculator', 
                task: 'Store your current age, a maximum age, and an estimated daily consumption of a snack. Calculate the total amount needed for the rest of your life.',
                hint1: 'First, calculate the number of years remaining. Then, how can you convert that to days?',
                hint2: 'Once you have the total number of days remaining, you can find the final answer by multiplying it by the daily consumption amount.',
                solution: {
                    code: 'const currentAge = 30;\nconst maxAge = 90;\nconst amountPerDay = 2;\n\nconst yearsRemaining = maxAge - currentAge;\nconst daysRemaining = yearsRemaining * 365;\nconst totalSupply = daysRemaining * amountPerDay;\n\nconsole.log(`You will need ${totalSupply} snacks to last you until the ripe old age of ${maxAge}.`);',
                    explanation: 'This problem is solved by breaking it down into smaller steps. We first find the number of years left, convert that to days, and then multiply by the daily amount to get the final total.'
                }
            },
        ]
    },
    {
        id: 'interactive',
        title: 'Section 6.2: Building an Interactive Web Application',
        description: 'A guided, medium-scale project that integrates the concepts of DOM manipulation and event handling. A visually rewarding project is ideal for this stage.',
        items: [
            { 
                title: 'Project: Pixel Art Maker', 
                steps: [
                    'HTML and CSS Setup: Create a static HTML file with a container for the art grid and another for a color palette. Style the grid and create CSS classes for different colors.',
                    'Grid Generation (JavaScript): Use nested for loops to dynamically create a grid of div elements (e.g., a 16x16 grid). Append each "pixel" to the main grid container in the DOM.',
                    'Event Handling (JavaScript): Add a single click event listener to the parent grid container (this is called event delegation). Use `event.target` to identify which specific pixel was clicked.',
                    'Drawing Logic (JavaScript): Inside the event listener, get the currently selected color from the palette. Then, change the `backgroundColor` style of the clicked pixel.',
                    'Adding Features: Implement a "Clear Grid" button. Add a color picker `<input type="color">` to allow for custom colors.'
                ]
            }
        ]
    },
    {
        id: 'advanced',
        title: 'Section 6.3: Advanced Project: A Real-World Application',
        description: 'This capstone project requires you to use advanced concepts, particularly asynchronous JavaScript, to build a functional, data-driven application.',
        items: [
            {
                title: 'Project: Weather Dashboard',
                steps: [
                    'API Key Acquisition: Sign up for a free API key from a weather data provider like OpenWeatherMap.',
                    'Interface Design (HTML/CSS): Build a simple UI with a text input for a city name, a "Get Weather" button, and a div to display the results.',
                    'Data Fetching (async/await): Write an `async` function that is triggered by the button click. Inside, construct the API URL and use `fetch()` with `await` to make the network request.',
                    'Promise Handling: The `fetch()` call returns a Promise. Use `await` again on the `response.json()` method to parse the JSON data from the response body.',
                    'Error Handling: Wrap the `await` calls inside a `try...catch` block to handle network errors or invalid city names gracefully.',
                    'Displaying Results (DOM Manipulation): Once the weather data is retrieved, use DOM manipulation to access its properties and display them in the results div.'
                ]
            }
        ]
    }
];

export default function Exercises() {
    const navigate = useNavigate();
    const [openSection, setOpenSection] = useState(exercisesData[0].id);
    const [visibleHints, setVisibleHints] = useState({});

    const toggleSection = (id) => {
        setOpenSection(openSection === id ? null : id);
    };

    const toggleHint = (id, hintNum) => {
        setVisibleHints(prev => ({ 
            ...prev, 
            [id]: {
                ...prev[id],
                [hintNum]: !prev[id]?.[hintNum] 
            }
        }));
    };

    return (
        <div className="exercises-container">
            <button className="back-button" onClick={() => navigate('/vqm-luma-javascript/')}>
                <i className="fas fa-arrow-left"></i> Back to Home
            </button>
            <div className="exercises-header">
                 <h2><i className="fas fa-keyboard"></i> Coding Exercises</h2>
                 <p>Knowledge becomes skill through application. Solidify your understanding with these hands-on challenges and projects.</p>
            </div>
            <div className="accordion">
                {exercisesData.map(section => (
                    <div className="accordion-section" key={section.id}>
                        <div className="accordion-header" onClick={() => toggleSection(section.id)}>
                            <h3>{section.title}</h3>
                            <i className={`fas fa-chevron-down ${openSection === section.id ? 'expanded' : ''}`}></i>
                        </div>
                        {openSection === section.id && (
                            <div className="accordion-content">
                                <p className="section-description">{section.description}</p>
                                <div className="items-grid">
                                    {section.items.map((item, index) => (
                                        <div className="exercise-card" key={item.id || index}>
                                            <h4>{item.title}</h4>
                                            {item.task && <p className="task-description">{item.task}</p>}
                                            {item.steps && (
                                                <ol>
                                                    {item.steps.map((step, stepIndex) => (
                                                        <li key={stepIndex}>{step}</li>
                                                    ))}
                                                </ol>
                                            )}
                                            {item.solution && (
                                                <div className="solution-container">
                                                    <div className="hint-buttons">
                                                        <button onClick={() => toggleHint(item.id, 1)} className="hint-toggle-button">
                                                            {visibleHints[item.id]?.[1] ? 'Hide Hint 1' : 'Show Hint 1'}
                                                        </button>
                                                        {visibleHints[item.id]?.[1] && (
                                                            <button onClick={() => toggleHint(item.id, 2)} className="hint-toggle-button">
                                                                {visibleHints[item.id]?.[2] ? 'Hide Hint 2' : 'Show Hint 2'}
                                                            </button>
                                                        )}
                                                    </div>
                                                    
                                                    {visibleHints[item.id]?.[1] && (
                                                        <div className="hint-content">
                                                            <p><strong>Hint 1:</strong> {item.hint1}</p>
                                                        </div>
                                                    )}
                                                    {visibleHints[item.id]?.[2] && (
                                                        <div className="hint-content">
                                                            <p><strong>Hint 2:</strong> {item.hint2}</p>
                                                        </div>
                                                    )}

                                                    {visibleHints[item.id]?.[1] && visibleHints[item.id]?.[2] && (
                                                         <button onClick={() => toggleHint(item.id, 'solution')} className="solution-toggle-button">
                                                            {visibleHints[item.id]?.solution ? 'Hide Solution' : 'Show Solution'}
                                                        </button>
                                                    )}

                                                    {visibleHints[item.id]?.solution && (
                                                        <div className="solution-code">
                                                            <p className="solution-explanation">{item.solution.explanation}</p>
                                                            <pre><code>{item.solution.code}</code></pre>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
