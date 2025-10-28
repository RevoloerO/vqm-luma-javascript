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
      id: 'template-literals',
      title: '2.6 Template Literals',
      icon: 'fa-quote-right',
      content: `
        <h4>Core Concept: Modern String Formatting</h4>
        <p><strong>Template literals</strong> (also called template strings) provide a cleaner, more powerful way to work with strings in JavaScript. They use backticks (\`) instead of quotes and allow for embedded expressions and multi-line strings.</p>

        <h5>1. STRING INTERPOLATION</h5>
        <p><strong>Keyword:</strong> <code>\${expression}</code></p>
        <p>Instead of concatenating strings with <code>+</code>, you can embed variables and expressions directly using <code>\${}</code> syntax.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let name = "Alice";
let age = 25;

// Old way (string concatenation)
let oldGreeting = "Hello, " + name + "! You are " + age + " years old.";

// New way (template literal)
let newGreeting = \`Hello, \${name}! You are \${age} years old.\`;

console.log(newGreeting); // "Hello, Alice! You are 25 years old."</code></pre>
        <hr>

        <h5>2. MULTI-LINE STRINGS</h5>
        <p><strong>Keyword:</strong> Backticks <code>\`\`</code></p>
        <p>Template literals preserve line breaks, making it easy to create multi-line strings without escape characters.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let message = \`This is line 1
This is line 2
This is line 3\`;

console.log(message);</code></pre>
        <hr>

        <h5>3. EMBEDDED EXPRESSIONS</h5>
        <p><strong>Keyword:</strong> <code>\${}</code> with calculations</p>
        <p>You can embed any JavaScript expression inside <code>\${}</code>, including calculations, function calls, and ternary operators.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let price = 29.99;
let quantity = 3;

let total = \`Total cost: $\${price * quantity}\`;
console.log(total); // "Total cost: $89.97"

let age = 20;
let status = \`You are \${age >= 18 ? 'an adult' : 'a minor'}\`;
console.log(status); // "You are an adult"</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Template Literals',
        nodes: [
          { title: 'String Interpolation', keyword: '${expression}', description: 'Embed variables and expressions directly in strings.' },
          { title: 'Multi-line Support', keyword: 'Backticks', description: 'Create strings that span multiple lines naturally.' },
          { title: 'Expression Power', keyword: 'Embedded JS', description: 'Include calculations, functions, and logic within strings.' },
        ]
      }
    },
    {
      id: 'array-methods',
      title: '2.7 Array Methods',
      icon: 'fa-list-ul',
      content: `
        <h4>Core Concept: Powerful Array Transformations</h4>
        <p>JavaScript provides powerful built-in methods for working with arrays. These methods make it easy to transform, filter, and process data without writing manual loops.</p>

        <h5>1. TRANSFORM EACH ITEM</h5>
        <p><strong>Keyword:</strong> <code>.map()</code></p>
        <p>Creates a new array by transforming each element according to a function. Use it when you want to convert each item to something else.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

// Arrow function version (modern syntax)
let tripled = numbers.map(num => num * 3);
console.log(tripled); // [3, 6, 9, 12]</code></pre>
        <hr>

        <h5>2. FILTER BY CONDITION</h5>
        <p><strong>Keyword:</strong> <code>.filter()</code></p>
        <p>Creates a new array containing only elements that pass a test. Use it when you want to keep only certain items.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let ages = [12, 17, 22, 8, 35];
let adults = ages.filter(function(age) {
  return age >= 18;
});

console.log(adults); // [22, 35]

// Filtering objects
let users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];

let activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{name: "Alice", active: true}, {name: "Charlie", active: true}]</code></pre>
        <hr>

        <h5>3. REDUCE TO SINGLE VALUE</h5>
        <p><strong>Keyword:</strong> <code>.reduce()</code></p>
        <p>Reduces an array to a single value by repeatedly applying a function. Perfect for summing, counting, or combining values.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let prices = [19.99, 4.95, 12.50];

// Sum all prices
let total = prices.reduce(function(sum, price) {
  return sum + price;
}, 0); // 0 is the starting value

console.log(total); // 37.44

// Count occurrences
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); // {apple: 3, banana: 2, orange: 1}</code></pre>
        <hr>

        <h5>4. EXECUTE FOR EACH ITEM</h5>
        <p><strong>Keyword:</strong> <code>.forEach()</code></p>
        <p>Executes a function for each array element. Use it when you want to do something with each item but don't need a new array.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let names = ["Alice", "Bob", "Charlie"];

names.forEach(function(name, index) {
  console.log(\`\${index + 1}. \${name}\`);
});

// Output:
// 1. Alice
// 2. Bob
// 3. Charlie</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Array Methods',
        nodes: [
          { title: 'Transform', keyword: '.map()', description: 'Create a new array by transforming each element.' },
          { title: 'Filter', keyword: '.filter()', description: 'Create a new array with only items that pass a test.' },
          { title: 'Reduce', keyword: '.reduce()', description: 'Reduce an array to a single value (sum, count, etc).' },
          { title: 'Iterate', keyword: '.forEach()', description: 'Execute a function for each array element.' },
        ]
      }
    },
    {
      id: 'string-methods',
      title: '2.8 String Methods',
      icon: 'fa-font',
      content: `
        <h4>Core Concept: String Manipulation Tools</h4>
        <p>JavaScript provides many built-in methods for working with strings. These methods help you search, modify, and extract information from text.</p>

        <h5>COMMON STRING METHODS</h5>
        <div class="two-column-layout">
          <div class="column">
            <p><strong>1. Length</strong></p>
            <pre><code>let text = "Hello";
console.log(text.length); // 5</code></pre>

            <p><strong>2. Change Case</strong></p>
            <pre><code>let name = "Alice";
console.log(name.toUpperCase()); // "ALICE"
console.log(name.toLowerCase()); // "alice"</code></pre>

            <p><strong>3. Extract Parts</strong></p>
            <pre><code>let phrase = "JavaScript is fun";
console.log(phrase.slice(0, 10)); // "JavaScript"
console.log(phrase.substring(11, 13)); // "is"</code></pre>

            <p><strong>4. Replace Text</strong></p>
            <pre><code>let sentence = "I like cats";
let updated = sentence.replace("cats", "dogs");
console.log(updated); // "I like dogs"</code></pre>
          </div>

          <div class="column">
            <p><strong>5. Search & Check</strong></p>
            <pre><code>let url = "https://example.com";
console.log(url.includes("example")); // true
console.log(url.startsWith("https")); // true
console.log(url.endsWith(".com")); // true
console.log(url.indexOf("example")); // 8</code></pre>

            <p><strong>6. Split & Join</strong></p>
            <pre><code>// Split string into array
let csv = "apple,banana,cherry";
let fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]

// Join array into string
let joined = fruits.join(" - ");
console.log(joined); // "apple - banana - cherry"</code></pre>

            <p><strong>7. Trim Whitespace</strong></p>
            <pre><code>let messy = "  hello  ";
console.log(messy.trim()); // "hello"</code></pre>
          </div>
        </div>

        <h5>CHAINING METHODS</h5>
        <p>String methods can be chained together for powerful transformations:</p>
        <pre><code>let input = "  JAVASCRIPT is AWESOME  ";
let cleaned = input.trim().toLowerCase().replace("javascript", "JS");
console.log(cleaned); // "js is awesome"</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'String Methods',
        nodes: [
          { title: 'Transform', keyword: 'toUpperCase/toLowerCase', description: 'Change the case of strings.' },
          { title: 'Extract', keyword: 'slice/substring', description: 'Get a portion of a string.' },
          { title: 'Search', keyword: 'includes/indexOf', description: 'Find text within a string.' },
          { title: 'Modify', keyword: 'replace/trim/split', description: 'Change or restructure strings.' },
        ]
      }
    },
    {
      id: 'error-handling',
      title: '2.9 Error Handling',
      icon: 'fa-exclamation-triangle',
      content: `
        <h4>Core Concept: Graceful Error Management</h4>
        <p>Errors are inevitable in programming. <strong>Error handling</strong> allows your program to catch and respond to errors gracefully instead of crashing.</p>

        <h5>1. TRY-CATCH BLOCK</h5>
        <p><strong>Keyword:</strong> <code>try...catch</code></p>
        <p>The <code>try</code> block contains code that might throw an error. If an error occurs, execution immediately jumps to the <code>catch</code> block.</p>
        <p><strong>Example:</strong></p>
        <pre><code>try {
  let data = JSON.parse('invalid json'); // This will throw an error
  console.log(data);
} catch (error) {
  console.log("An error occurred:", error.message);
  // Program continues running!
}</code></pre>
        <hr>

        <h5>2. FINALLY BLOCK</h5>
        <p><strong>Keyword:</strong> <code>finally</code></p>
        <p>The <code>finally</code> block runs regardless of whether an error occurred. Use it for cleanup code that must always execute.</p>
        <p><strong>Example:</strong></p>
        <pre><code>try {
  console.log("Attempting operation...");
  // Some risky operation
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Cleanup complete");
  // This ALWAYS runs
}</code></pre>
        <hr>

        <h5>3. THROWING CUSTOM ERRORS</h5>
        <p><strong>Keyword:</strong> <code>throw</code></p>
        <p>You can create and throw your own errors using the <code>throw</code> keyword.</p>
        <p><strong>Example:</strong></p>
        <pre><code>function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
} catch (error) {
  console.log("Caught error:", error.message);
  // "Caught error: Cannot divide by zero!"
}</code></pre>

        <h5>4. PRACTICAL USE CASE</h5>
        <p>Handling user input or network requests:</p>
        <pre><code>function fetchUserData(userId) {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    // Simulate fetching data
    let userData = { id: userId, name: "Alice" };
    return userData;

  } catch (error) {
    console.error("Failed to fetch user:", error.message);
    return null; // Return safe fallback value
  }
}

let user = fetchUserData(123); // Works
let noUser = fetchUserData(); // Handles error gracefully</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Error Handling',
        nodes: [
          { title: 'Catch Errors', keyword: 'try...catch', description: 'Safely handle code that might fail.' },
          { title: 'Cleanup Code', keyword: 'finally', description: 'Code that runs regardless of errors.' },
          { title: 'Custom Errors', keyword: 'throw', description: 'Create and throw your own error messages.' },
        ]
      }
    },
    {
      id: 'regular-expressions',
      title: '2.10 Regular Expressions',
      icon: 'fa-search',
      content: `
        <h4>Core Concept: Pattern Matching in Text</h4>
        <p><strong>Regular expressions</strong> (regex) are powerful patterns used to match, search, and manipulate text. They're essential for validating input, extracting data, and text processing.</p>

        <h5>1. BASIC SYNTAX</h5>
        <p><strong>Keyword:</strong> <code>/pattern/flags</code></p>
        <p>Regex patterns are enclosed between forward slashes. Flags modify how the pattern matches.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let pattern = /hello/;    // Matches "hello"
let caseInsensitive = /hello/i;  // i flag = case insensitive
let global = /hello/g;    // g flag = find all matches (global)</code></pre>
        <hr>

        <h5>2. COMMON PATTERNS</h5>
        <div class="two-column-layout">
          <div class="column">
            <p><strong>Character Classes</strong></p>
            <ul>
              <li><code>\\d</code> - Any digit (0-9)</li>
              <li><code>\\w</code> - Any word character (a-z, A-Z, 0-9, _)</li>
              <li><code>\\s</code> - Any whitespace</li>
              <li><code>.</code> - Any character except newline</li>
            </ul>

            <p><strong>Quantifiers</strong></p>
            <ul>
              <li><code>+</code> - One or more</li>
              <li><code>*</code> - Zero or more</li>
              <li><code>?</code> - Zero or one</li>
              <li><code>{3}</code> - Exactly 3</li>
              <li><code>{2,5}</code> - Between 2 and 5</li>
            </ul>
          </div>

          <div class="column">
            <p><strong>Anchors</strong></p>
            <ul>
              <li><code>^</code> - Start of string</li>
              <li><code>$</code> - End of string</li>
            </ul>

            <p><strong>Special Characters</strong></p>
            <ul>
              <li><code>[abc]</code> - Match any of: a, b, or c</li>
              <li><code>[0-9]</code> - Match any digit</li>
              <li><code>[^abc]</code> - NOT a, b, or c</li>
              <li><code>|</code> - OR operator</li>
            </ul>
          </div>
        </div>
        <hr>

        <h5>3. REGEX METHODS</h5>
        <p><strong>Testing & Matching</strong></p>
        <pre><code>let text = "My phone number is 123-456-7890";

// Test if pattern exists
let phonePattern = /\\d{3}-\\d{3}-\\d{4}/;
console.log(phonePattern.test(text)); // true

// Extract matches
let numbers = text.match(/\\d+/g); // g flag finds all matches
console.log(numbers); // ["123", "456", "7890"]

// Search for position
console.log(text.search(/phone/)); // 3 (index where "phone" starts)</code></pre>
        <hr>

        <h5>4. PRACTICAL EXAMPLES</h5>
        <pre><code>// Validate email
let emailPattern = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
console.log(emailPattern.test("user@example.com")); // true
console.log(emailPattern.test("invalid.email")); // false

// Validate phone number
let phonePattern = /^\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$/;
console.log(phonePattern.test("(123) 456-7890")); // true
console.log(phonePattern.test("123-456-7890")); // true

// Extract hashtags
let tweet = "Learning #JavaScript and #WebDev is fun!";
let hashtags = tweet.match(/#\\w+/g);
console.log(hashtags); // ["#JavaScript", "#WebDev"]

// Replace patterns
let html = "Visit our site at http://example.com";
let linked = html.replace(/(https?:\\/\\/[\\w.-]+)/g, '<a href="$1">$1</a>');
console.log(linked); // Links become clickable</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Regular Expressions',
        nodes: [
          { title: 'Patterns', keyword: '/pattern/', description: 'Define text patterns to match.' },
          { title: 'Character Classes', keyword: '\\d, \\w, \\s', description: 'Match specific types of characters.' },
          { title: 'Test & Match', keyword: 'test(), match()', description: 'Test patterns and extract matches.' },
          { title: 'Validation', keyword: 'Email, Phone', description: 'Validate user input formats.' },
        ]
      }
    },
    {
      id: 'json',
      title: '2.11 JSON (JavaScript Object Notation)',
      icon: 'fa-code',
      content: `
        <h4>Core Concept: Data Exchange Format</h4>
        <p><strong>JSON</strong> (JavaScript Object Notation) is a lightweight, text-based format for storing and exchanging data. It's the standard format for APIs and configuration files.</p>

        <h5>1. JSON STRUCTURE</h5>
        <p><strong>Keyword:</strong> <code>Key-Value Pairs</code></p>
        <p>JSON looks similar to JavaScript objects but with stricter rules: keys must be in double quotes, and only certain data types are allowed.</p>
        <p><strong>Example:</strong></p>
        <pre><code>{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "courses": ["Math", "Science"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}</code></pre>
        <hr>

        <h5>2. PARSING JSON</h5>
        <p><strong>Keyword:</strong> <code>JSON.parse()</code></p>
        <p>Converts a JSON string into a JavaScript object that you can work with.</p>
        <p><strong>Example:</strong></p>
        <pre><code>// JSON string (from API or file)
let jsonString = '{"name":"Bob","score":95}';

// Parse into JavaScript object
let user = JSON.parse(jsonString);

console.log(user.name);  // "Bob"
console.log(user.score); // 95</code></pre>
        <hr>

        <h5>3. STRINGIFYING TO JSON</h5>
        <p><strong>Keyword:</strong> <code>JSON.stringify()</code></p>
        <p>Converts a JavaScript object into a JSON string for storage or transmission.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let product = {
  id: 101,
  name: "Laptop",
  price: 999.99,
  inStock: true
};

// Convert to JSON string
let jsonString = JSON.stringify(product);
console.log(jsonString);
// '{"id":101,"name":"Laptop","price":999.99,"inStock":true}'

// Pretty print with indentation
let prettyJson = JSON.stringify(product, null, 2);
console.log(prettyJson);
/*
{
  "id": 101,
  "name": "Laptop",
  "price": 999.99,
  "inStock": true
}
*/</code></pre>
        <hr>

        <h5>4. PRACTICAL USE CASES</h5>
        <p><strong>Local Storage</strong></p>
        <pre><code>// Saving data to localStorage
let settings = { theme: "dark", fontSize: 16 };
localStorage.setItem('userSettings', JSON.stringify(settings));

// Loading data from localStorage
let saved = localStorage.getItem('userSettings');
let loadedSettings = JSON.parse(saved);
console.log(loadedSettings.theme); // "dark"</code></pre>

        <p><strong>Working with APIs</strong></p>
        <pre><code>// Fetching data from an API (modern approach)
fetch('https://api.example.com/users/1')
  .then(response => response.json()) // Parse JSON automatically
  .then(user => {
    console.log(user.name);
    console.log(user.email);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });</code></pre>

        <p><strong>Error Handling with JSON</strong></p>
        <pre><code>let invalidJson = '{"name": "Alice", age: 25}'; // Missing quotes around "age"

try {
  let data = JSON.parse(invalidJson);
} catch (error) {
  console.error("Invalid JSON:", error.message);
  // Handle the error gracefully
}</code></pre>

        <h5>5. JSON RULES</h5>
        <ul>
          <li>Keys must be in <strong>double quotes</strong> (not single)</li>
          <li>Strings must use <strong>double quotes</strong></li>
          <li>No trailing commas allowed</li>
          <li>Supports: strings, numbers, booleans, arrays, objects, null</li>
          <li>Does NOT support: functions, undefined, Date objects</li>
        </ul>
      `,
      code: null,
      mindMap: {
        center: 'JSON',
        nodes: [
          { title: 'Format', keyword: 'Key-Value', description: 'Structured text format for data exchange.' },
          { title: 'Parse', keyword: 'JSON.parse()', description: 'Convert JSON string to JavaScript object.' },
          { title: 'Stringify', keyword: 'JSON.stringify()', description: 'Convert JavaScript object to JSON string.' },
          { title: 'Use Cases', keyword: 'APIs, Storage', description: 'Data exchange and local storage.' },
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
