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
      id: 'part-2',
      title: 'Part II: The Building Blocks',
      icon: 'fa-cubes',
      subTopics: [
        {
          id: 'variables-data-types',
          title: '2.1 Variables & Data Types',
          icon: 'fa-box',
          content: `
            <h4>Core Concept: Storing Information in Labeled Boxes</h4>
            <p>Programs need to work with information. In JavaScript, we store this information in <strong>variables</strong>, which are like labeled containers. The information itself comes in different forms, known as <strong>data types</strong>.</p>
            
            <h5>1. THE CONTAINER</h5>
            <p><strong>Keyword:</strong> <code>Variable</code></p>
            <p>A named placeholder for a value. Use <code>let</code> for values that can change and <code>const</code> for values that should not. The <code>=</code> sign is for assignment, not equality. <code>let score = 100;</code> means "the variable 'score' gets the value 100."</p>
            <p><strong>Example:</strong></p>
            <pre><code>let playerName = "VQM";\nconst highScore = 10000;</code></pre>
            <hr>

            <h4>The Three Core Data Types</h4>
            <div class="three-column-layout">
              <div class="column">
                <h5>2. TEXT</h5>
                <p><strong>Keyword:</strong> <code>String</code></p>
                <p>A sequence of text characters, always enclosed in quotes.</p>
                <p><strong>Example:</strong></p>
                <pre><code>let greeting = "Hello, world!";</code></pre>
              </div>
              <div class="column">
                <h5>3. NUMBERS</h5>
                <p><strong>Keyword:</strong> <code>Number</code></p>
                <p>Represents any kind of numerical data, including decimals.</p>
                <p><strong>Example:</strong></p>
                <pre><code>let userAge = 25;\nlet price = 19.99;</code></pre>
              </div>
              <div class="column">
                <h5>4. LOGIC</h5>
                <p><strong>Keyword:</strong> <code>Boolean</code></p>
                <p>Represents a logical value that can only be <code>true</code> or <code>false</code>.</p>
                <p><strong>Example:</strong></p>
                <pre><code>let isLoggedIn = true;</code></pre>
              </div>
            </div>
          `,
          code: null,
          mindMap: {
            center: 'Data Storage',
            nodes: [
              { title: 'The Container', keyword: 'Variable', description: 'A named container for storing information. Declared with `let` or `const`.' },
              { title: 'Text Data', keyword: 'String', description: 'A sequence of text, like a word or sentence. Always in quotes.' },
              { title: 'Numerical Data', keyword: 'Number', description: 'Represents all numbers, including whole numbers and decimals.' },
              { title: 'Logical Data', keyword: 'Boolean', description: 'Represents a value that can only be `true` or `false`.' },
            ]
          }
        },
        {
          id: 'conditionals-logic',
          title: '2.2 Conditionals & Logic',
          icon: 'fa-sitemap',
          content: `
            <h4>Core Concept: Making Decisions in Code</h4>
            <p>Programs become powerful when they can make decisions. This is achieved through <strong>conditional statements</strong>, which execute different blocks of code based on whether a certain condition is true or false.</p>
            
            <h5>1. BASIC DECISIONS</h5>
            <p><strong>Keyword:</strong> <code>if...else</code></p>
            <p>The most fundamental conditional. If the condition is true, the <code>if</code> block runs. Otherwise, the <code>else</code> block runs.</p>
            <p><strong>Example:</strong></p>
            <pre><code>let age = 12;\n\nif (age >= 18) {\n  console.log("This person is an adult.");\n} else {\n  console.log("This person is a child.");\n}</code></pre>
            <hr>

            <h5>2. MULTIPLE OUTCOMES</h5>
            <p><strong>Keyword:</strong> <code>else if</code></p>
            <p>Used to chain multiple conditions together to handle more than two possible outcomes.</p>
            <p><strong>Example:</strong></p>
            <pre><code>let score = 85;\nlet grade;\n\nif (score >= 90) {\n  grade = "A";\n} else if (score >= 80) {\n  grade = "B";\n} else {\n  grade = "F";\n}\n\nconsole.log("The grade is: " + grade);</code></pre>
            <hr>

            <h5>3. COMPLEX CONDITIONS</h5>
            <p><strong>Keyword:</strong> <code>Logical Operators</code></p>
            <p>Used to combine multiple conditions. <code>&&</code> (AND) requires both to be true. <code>||</code> (OR) requires at least one to be true. <code>!</code> (NOT) inverts a value.</p>
            <p><strong>Example:</strong></p>
            <pre><code>let age = 20;\nlet hasLicense = true;\n\nif (age >= 16 && hasLicense) {\n  console.log("Can legally drive.");\n}</code></pre>
          `,
          code: null,
          mindMap: {
            center: 'Decision Making',
            nodes: [
              { title: 'Basic Choice', keyword: 'if...else', description: 'Runs one of two code blocks based on a condition.' },
              { title: 'Multiple Choices', keyword: 'else if', description: 'Chains multiple conditions for several possible outcomes.' },
              { title: 'Combined Logic', keyword: '&&, ||, !', description: 'Logical operators for creating complex conditions.' },
            ]
          }
        },
        {
          id: 'loops',
          title: '2.3 Repeating Actions: Loops',
          icon: 'fa-sync-alt',
          content: `
            <h4>Core Concept: Repeating Actions Efficiently</h4>
            <p>Loops are used to execute a block of code repeatedly, saving you from writing the same lines over and over.</p>
            
            <div class="two-column-layout">
              <div class="column">
                <h5>1. KNOWN REPETITIONS</h5>
                <p><strong>Keyword:</strong> <code>for loop</code></p>
                <p>Ideal when the number of repetitions is known beforehand. It consists of an initializer, a condition, and an incrementer.</p>
                <p><strong>Example:</strong></p>
                <pre><code>// Prints numbers 1 through 5\nfor (let i = 1; i <= 5; i++) {\n  console.log(i);\n}</code></pre>
              </div>
              <div class="column">
                <h5>2. UNKNOWN REPETITIONS</h5>
                <p><strong>Keyword:</strong> <code>while loop</code></p>
                <p>Used when the loop should continue as long as a certain condition remains true, and the number of iterations is not known in advance.</p>
                <p><strong>Example:</strong></p>
                <pre><code>let count = 0;\n\nwhile (count < 3) {\n  console.log("Counting...");\n  count++;\n}</code></pre>
              </div>
            </div>
          `,
          code: null,
          mindMap: {
            center: 'Repetition',
            nodes: [
              { title: 'For Known Counts', keyword: 'for loop', description: 'Repeats a specific number of times.' },
              { title: 'For Unknown Counts', keyword: 'while loop', description: 'Repeats as long as a condition is true.' },
            ]
          }
        },
        {
          id: 'functions',
          title: '2.4 Reusable Recipes: Functions',
          icon: 'fa-cogs',
          content: `
            <h4>Core Concept: Creating Reusable Recipes</h4>
            <p>A function is a reusable block of code designed to perform a specific task. This is fundamental to writing clean and maintainable code ("Don't Repeat Yourself").</p>
            
            <h5>1. DEFINING & CALLING</h5>
            <p><strong>Keyword:</strong> <code>function</code></p>
            <p>A function is defined with the <code>function</code> keyword, a name, parentheses <code>()</code>, and a code block <code>{}</code>. To run it, you "call" it by its name.</p>
            <p><strong>Example:</strong></p>
            <pre><code>function greetUser() {\n  console.log("Welcome!");\n}\n\ngreetUser(); // Calls the function</code></pre>
            <hr>

            <div class="two-column-layout">
              <div class="column">
                <h5>2. INPUTS</h5>
                <p><strong>Keyword:</strong> <code>Parameters</code></p>
                <p>Parameters are placeholder variables in a function's definition that allow it to accept input values (arguments).</p>
                <p><strong>Example:</strong></p>
                <pre><code>// 'name' is a parameter\nfunction greet(name) {\n  console.log("Hello, " + name);\n}\n\ngreet("VQM"); // "VQM" is the argument</code></pre>
              </div>
              <div class="column">
                <h5>3. OUTPUTS</h5>
                <p><strong>Keyword:</strong> <code>return</code></p>
                <p>The <code>return</code> keyword allows a function to send a value back to the code that called it.</p>
                <p><strong>Example:</strong></p>
                <pre><code>function multiply(num1, num2) {\n  return num1 * num2;\n}\n\nlet result = multiply(4, 7);\n// 'result' is now 28</code></pre>
              </div>
            </div>
          `,
          code: null,
          mindMap: {
            center: 'Functions',
            nodes: [
              { title: 'The Recipe', keyword: 'function', description: 'A named, reusable block of code.' },
              { title: 'The Ingredients', keyword: 'Parameters', description: 'Inputs a function can accept to work with.' },
              { title: 'The Result', keyword: 'return', description: 'The value a function sends back after it runs.' },
            ]
          }
        },
        {
          id: 'data-structures',
          title: '2.5 Organizing Data',
          icon: 'fa-database',
          content: `
            <h4>Core Concept: Organizing Data Collections</h4>
            <p>To build complex applications, data must be organized efficiently. JavaScript provides two primary structures for this: arrays and objects.</p>
            
            <div class="two-column-layout">
              <div class="column">
                <h5>1. ORDERED LISTS</h5>
                <p><strong>Keyword:</strong> <code>Array</code></p>
                <p>An array is a single variable that holds an ordered list of multiple values. Arrays are zero-indexed, meaning the first item is at position 0.</p>
                <p><strong>Example:</strong></p>
                <pre><code>let favoriteFruits = ["apple", "banana", "cherry"];\n\nconsole.log(favoriteFruits[0]); // Output: apple</code></pre>
              </div>
              <div class="column">
                <h5>2. UNORDERED COLLECTIONS</h5>
                <p><strong>Keyword:</strong> <code>Object</code></p>
                <p>An object is a collection of related data stored as key-value pairs. It's perfect for describing a single entity with multiple characteristics.</p>
                <p><strong>Example:</strong></p>
                <pre><code>let myCar = {\n  make: "Toyota",\n  model: "Camry",\n  year: 2021\n};\n\nconsole.log(myCar.make); // Output: Toyota</code></pre>
              </div>
            </div>
          `,
          code: null,
          mindMap: {
            center: 'Data Organization',
            nodes: [
              { title: 'Ordered Lists', keyword: 'Array', description: 'A numbered list of items, starting at index 0.' },
              { title: 'Unordered Collections', keyword: 'Object', description: 'A collection of named key-value pairs.' },
            ]
          }
        }
      ]
    },
    {
      id: 'part-3',
      title: 'Part III: JavaScript in Action',
      icon: 'fa-bolt',
      subTopics: [
        {
          id: 'dom-intro',
          title: '3.1 The DOM',
          icon: 'fa-tree',
          content: `
            <h4>Core Concept: The Web Page's Blueprint</h4>
            <p>When a browser loads an HTML document, it creates a live, in-memory representation of the page's structure called the <strong>Document Object Model (DOM)</strong>. The DOM represents the document as a tree of objects that JavaScript can interact with.</p>
            
            <h5>1. THE BLUEPRINT</h5>
            <p><strong>Keyword:</strong> <code>DOM</code></p>
            <p>The Document Object Model is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.</p>
            <p><strong>Analogy:</strong> Think of the DOM as a family tree for your webpage. The <code>&lt;html&gt;</code> tag is the ancestor, and all other elements are its descendants.</p>
            <hr>

            <h5>2. THE FAMILY TREE</h5>
            <p><strong>Keyword:</strong> <code>Nodes</code></p>
            <p>Every part of the document—elements, attributes, and text—is a <strong>node</strong> in the DOM tree. These nodes have relationships like a family.</p>
            <ul>
              <li><strong>Parent:</strong> An element that directly contains another element.</li>
              <li><strong>Child:</strong> An element directly contained within another.</li>
              <li><strong>Sibling:</strong> Elements that share the same parent.</li>
            </ul>
          `,
          code: null,
          mindMap: {
            center: 'The DOM',
            nodes: [
              { title: 'The Blueprint', keyword: 'DOM Tree', description: 'A live, object-based representation of an HTML document.' },
              { title: 'The Members', keyword: 'Nodes', description: 'Every part of the document (elements, text) is a node.' },
              { title: 'The Relationships', keyword: 'Parent, Child, Sibling', description: 'Nodes have hierarchical relationships, like a family tree.' },
            ]
          }
        },
        {
          id: 'dom-manipulation',
          title: '3.2 DOM Manipulation',
          icon: 'fa-paint-brush',
          content: `
            <h4>Core Concept: Dynamically Changing the Page</h4>
            <p><strong>DOM Manipulation</strong> is the process of using JavaScript to add, remove, or change the elements (nodes) of the DOM tree after the page has loaded. This is what makes a web page interactive.</p>
            
            <h5>1. SELECTING ELEMENTS</h5>
            <p><strong>Keyword:</strong> <code>Selectors</code></p>
            <p>Before you can change an element, you must select it. Modern JavaScript uses CSS-style selectors.</p>
            <p><strong>Example:</strong></p>
            <pre><code>// Selects the first element with the ID 'main-title'\nlet title = document.querySelector('#main-title');\n\n// Selects ALL elements with the class 'paragraph'\nlet paragraphs = document.querySelectorAll('.paragraph');</code></pre>
            <hr>

            <h5>2. MODIFYING ELEMENTS</h5>
            <p><strong>Keyword:</strong> <code>Properties</code></p>
            <p>Once an element is selected, you can change its content or style using its properties.</p>
            <ul>
              <li><code>.textContent</code>: Changes only the text inside an element.</li>
              <li><code>.innerHTML</code>: Changes the entire HTML content, including tags.</li>
              <li><code>.style</code>: Allows you to directly manipulate CSS properties.</li>
            </ul>
            <p><strong>Example:</strong></p>
            <pre><code>let title = document.querySelector('#main-title');\n\ntitle.textContent = "Welcome to LUMA!";\ntitle.style.color = "purple";</code></pre>
          `,
          code: null,
          mindMap: {
            center: 'Manipulation',
            nodes: [
              { title: 'Find', keyword: 'Selectors', description: 'Use methods like `querySelector` to find elements on the page.' },
              { title: 'Change Content', keyword: '.textContent', description: 'Modify the text inside a selected element.' },
              { title: 'Change Style', keyword: '.style', description: 'Modify the CSS properties of a selected element.' },
              { title: 'Create & Add', keyword: '.createElement', description: 'Create new elements and add them to the page.' },
            ]
          }
        }
      ]
    }
];
