/**
 * @file Contains the data for the "Fundamentals" section.
 * This structure now supports nested topics for a hierarchical sidebar.
 */
export const fundamentalsData = [
    {
      id: 'part-1',
      title: 'Part I: Foundational Concepts',
      icon: 'fa-book-open',
      // This topic acts as a container for sub-topics.
      subTopics: [
        {
          id: 'giving-commands',
          title: '1.1 Giving Computers Commands',
          icon: 'fa-terminal',
          content: `
            <h4>Core Concept: Programming is Precise Communication</h4>
            <p>This is the fundamental logic, from the main idea to the details.</p>
            
            <h5>1. PROGRAMMING</h5>
            <p><strong>Keyword:</strong> <code>Instruction</code></p>
            <p>The act of giving a computer a set of precise instructions.</p>
            <p><strong>Example:</strong> A single line of code like <code>console.log("Hello, World!");</code> is an instruction to the computer to display "Hello, World!" on the screen.</p>
            <hr>

            <h5>2. THE COMPUTER</h5>
            <p><strong>Keyword:</strong> <code>Literal</code></p>
            <p>The computer follows instructions exactly. It cannot guess intent or understand ambiguity. This demands <strong>precision</strong> from the programmer.</p>
            <p><strong>Example:</strong> If you tell a person to "get the glasses," they might ask "drinking glasses or eye glasses?". A computer given a command <code>get("glasses")</code> would fail unless the variable "glasses" was defined with perfect precision.</p>
            <hr>

            <h5>3. THE PLAN</h5>
            <p><strong>Keyword:</strong> <code>Algorithm</code></p>
            <p>The step-by-step plan of instructions you create for the computer to follow. The order of these steps (the <strong>sequence</strong>) is critical.</p>
            <p><strong>Example:</strong> An algorithm for making tea: (1) Boil water. (2) Put tea bag in cup. (3) Pour boiled water into cup. (4) Wait 3 minutes. Changing the sequence would result in a bad cup of tea.</p>
            <hr>

            <h5>4. THE LANGUAGE</h5>
            <p><strong>Keyword:</strong> <code>Syntax</code></p>
            <p>The strict grammar and punctuation rules of the programming language. If the syntax is wrong, the computer cannot understand the instruction.</p>
            <p><strong>Example:</strong> In JavaScript, ending an instruction with a semicolon is correct syntax: <code>let x = 5;</code>. Writing <code>let x be 5</code> is incorrect syntax and will cause an error.</p>
          `,
          code: null,
          mindMap: {
            center: 'Programming',
            nodes: [
              { title: 'The Act', keyword: 'Instruction', description: 'The core of programming is telling a computer what to do, one precise step at a time.' },
              { title: 'The Tool', keyword: 'Computer (Literal)', description: 'A computer does exactly what it is told. It cannot infer meaning or handle ambiguity.' },
              { title: 'The Plan', keyword: 'Algorithm (Sequence)', description: 'A step-by-step plan for solving a problem. The order of instructions is crucial.' },
              { title: 'The Rules', keyword: 'Syntax (Grammar)', description: 'The specific grammar of a programming language that the computer can understand.' },
            ]
          }
        },
        {
          id: 'repeating-deciding',
          title: '1.2 Repeating & Deciding',
          icon: 'fa-code-branch',
          content: `
            <h4>Core Concept: Programs Need to Control Their Flow</h4>
            <p>Beyond a simple sequence, programs need to repeat actions and make choices. This is called <strong>control flow</strong>.</p>
            <div class="two-column-layout">
              <div class="column">
                <h5>1. REPETITION</h5>
                <p><strong>Keyword:</strong> <code>Loop</code></p>
                <p>A loop allows a set of instructions to be repeated multiple times. This is useful for automating repetitive tasks without writing the same code over and over.</p>
                <p><strong>Example:</strong> To say "Hello" three times, you can use a loop:</p>
                <pre><code>for (let i = 0; i < 3; i++) {\n  console.log("Hello");\n}</code></pre>
              </div>
              <div class="column">
                <h5>2. DECISION MAKING</h5>
                <p><strong>Keyword:</strong> <code>Conditional</code></p>
                <p>A conditional allows a program to make a choice. It follows "if-then" logic to execute different instructions based on whether a certain condition is true.</p>
                <p><strong>Example:</strong> To only perform an action if a user is logged in:</p>
                <pre><code>let isLoggedIn = true;\n\nif (isLoggedIn === true) {\n  console.log("Welcome back!");\n}</code></pre>
              </div>
            </div>
          `,
          code: null,
          mindMap: {
            center: 'Control Flow',
            nodes: [
              { title: 'Repetition', keyword: 'Loop', description: 'Repeats a block of code multiple times to avoid redundancy. (e.g., A daily routine)' },
              { title: 'Decision Making', keyword: 'Conditional', description: 'Allows the program to follow different paths based on "if-then" logic. (e.g., If it rains, take an umbrella)' },
            ]
          }
        },
        {
          id: 'intro-js',
          title: '1.3 Introducing JavaScript',
          icon: 'fa-magic',
          content: `
            <h4>Core Concept: JavaScript Brings Websites to Life</h4>
            <p>While other technologies build a website's structure and apply style, JavaScript provides the "brains" and interactivity. The relationship is best understood with an analogy:</p>
            <div class="three-column-layout">
              <div class="column">
                <h5>1. STRUCTURE</h5>
                <p><strong>Keyword:</strong> <code>HTML</code></p>
                <p>HTML (HyperText Markup Language) is the <strong>skeleton</strong> of a website. It defines the core elements, like headings, paragraphs, and images.</p>
                <p><strong>Example:</strong> An HTML tag <code>&lt;h1&gt;My Website&lt;/h1&gt;</code> creates a main heading.</p>
              </div>
              <div class="column">
                <h5>2. STYLE</h5>
                <p><strong>Keyword:</strong> <code>CSS</code></p>
                <p>CSS (Cascading Style Sheets) is the <strong>decoration</strong>. It styles the HTML, controlling colors, fonts, and layout.</p>
                <p><strong>Example:</strong> A CSS rule <code>h1 { color: blue; }</code> would turn that main heading blue.</p>
              </div>
              <div class="column">
                <h5>3. INTERACTIVITY</h5>
                <p><strong>Keyword:</strong> <code>JavaScript</code></p>
                <p>JavaScript is the <strong>nervous system</strong>. It makes the website functional and allows it to react to user actions.</p>
                <p><strong>Example:</strong> JavaScript can make a button clickable, so when a user clicks it, a pop-up message appears.</p>
              </div>
            </div>
          `,
          code: null,
          mindMap: {
            center: 'A Website',
            nodes: [
              { title: 'The Skeleton', keyword: 'HTML', description: 'Provides the core structure and elements of the page.' },
              { title: 'The Decoration', keyword: 'CSS', description: 'Styles the structure with colors, fonts, and layouts.' },
              { title: 'The Brains', keyword: 'JavaScript', description: 'Adds interactivity and makes the website dynamic.' },
            ]
          }
        },
        {
          id: 'conceptual-summary',
          title: 'Part I Summary',
          icon: 'fa-table',
          content: `
            <h5>Consolidated Reference Guide</h5>
            <p>This table links the abstract programming terms to their real-world analogies.</p>
            <table class="analogy-table">
              <thead>
                <tr>
                  <th>Concept</th>
                  <th>Analogy</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Algorithm</strong></td>
                  <td>A recipe, a treasure map</td>
                  <td>A step-by-step plan for completing a task.</td>
                </tr>
                <tr>
                  <td><strong>Sequence</strong></td>
                  <td>The order of steps in a recipe</td>
                  <td>Instructions are followed in a specific order.</td>
                </tr>
                <tr>
                  <td><strong>Syntax</strong></td>
                  <td>Grammar and punctuation</td>
                  <td>The rules for how to write instructions the computer understands.</td>
                </tr>
                <tr>
                  <td><strong>Loop</strong></td>
                  <td>A daily routine (e.g., bedtime)</td>
                  <td>Repeating a set of instructions multiple times.</td>
                </tr>
                <tr>
                  <td><strong>Conditional</strong></td>
                  <td>A choice based on a situation</td>
                  <td>Deciding which instructions to follow (e.g., "If it's Tuesday...").</td>
                </tr>
                 <tr>
                  <td><strong>Variable</strong></td>
                  <td>A labeled box or bucket</td>
                  <td>A named placeholder for storing information.</td>
                </tr>
                 <tr>
                  <td><strong>Function</strong></td>
                  <td>A mini-recipe within a larger recipe</td>
                  <td>A named, reusable set of instructions for a specific task.</td>
                </tr>
              </tbody>
            </table>
          `,
          code: null,
          mindMap: null
        }
      ]
    },
    {
      id: 'vars',
      title: 'Variables & Data Types',
      icon: 'fa-cube',
      content: `
        <p>In JavaScript, a variable is a container for a value. Before you can use a variable, you need to declare it using one of three keywords: <code>var</code>, <code>let</code>, or <code>const</code>.</p>
        <ul>
          <li><strong>let:</strong> Declares a block-scoped, mutable variable. This is the modern standard.</li>
          <li><strong>const:</strong> Declares a block-scoped, immutable variable. The value cannot be reassigned.</li>
          <li><strong>var:</strong> The old way. It has function scope, not block scope, which can lead to unexpected behavior.</li>
        </ul>
      `,
      code: `
let message = "Hello, LUMA!"; // String
const year = 2025; // Number
let isLearning = true; // Boolean

console.log(typeof message); // "string"
      `
    },
    {
      id: 'async',
      title: 'Async JS',
      icon: 'fa-bolt',
      content: `
        <p>Asynchronous JavaScript is crucial for non-blocking operations, like fetching data from a server. The modern way to handle this is with <code>async/await</code>, which is syntactic sugar over Promises.</p>
      `,
      code: `
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
      `
    }
];
