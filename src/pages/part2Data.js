/**
 * @file Contains the data for Part II: The Building Blocks.
 */
export const part2Data = {
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
    },
    {
      id: 'part-2-summary',
      title: 'Part II Summary',
      icon: 'fa-table',
      content: `
        <h5>Consolidated Reference Guide for Part II</h5>
        <p>This table summarizes the core building blocks of JavaScript.</p>
        <table class="analogy-table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Keyword(s)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Variable</strong></td>
              <td><code>let</code>, <code>const</code></td>
              <td>A named container for storing a value.</td>
            </tr>
            <tr>
              <td><strong>String</strong></td>
              <td><code>"..."</code> or <code>'...'</code></td>
              <td>A sequence of text characters.</td>
            </tr>
            <tr>
              <td><strong>Number</strong></td>
              <td><code>123</code>, <code>19.99</code></td>
              <td>Represents numerical data.</td>
            </tr>
            <tr>
              <td><strong>Boolean</strong></td>
              <td><code>true</code>, <code>false</code></td>
              <td>Represents a logical value of true or false.</td>
            </tr>
            <tr>
              <td><strong>Conditional</strong></td>
              <td><code>if</code>, <code>else</code>, <code>else if</code></td>
              <td>Makes decisions and executes different code blocks.</td>
            </tr>
            <tr>
              <td><strong>Loop</strong></td>
              <td><code>for</code>, <code>while</code></td>
              <td>Repeats a block of code multiple times.</td>
            </tr>
            <tr>
              <td><strong>Function</strong></td>
              <td><code>function</code>, <code>return</code></td>
              <td>A reusable block of code that can accept inputs.</td>
            </tr>
            <tr>
              <td><strong>Array</strong></td>
              <td><code>[]</code></td>
              <td>An ordered, numbered list of values.</td>
            </tr>
            <tr>
              <td><strong>Object</strong></td>
              <td><code>{}</code></td>
              <td>An unordered collection of named key-value pairs.</td>
            </tr>
          </tbody>
        </table>
      `,
      code: null,
      mindMap: null
    }
  ]
};
