/**
 * @file Contains the data for Part IV: Advanced Mechanics.
 */
export const part4Data = {
  id: 'part-4',
  title: "Part IV: Advanced Mechanics",
  icon: 'fa-cogs',
  subTopics: [
    {
      id: 'scope-context',
      title: '4.1 Context & Scope',
      icon: 'fa-map-signs',
      content: `
        <h4>Core Concept: Where Variables Live</h4>
        <p><strong>Scope</strong> defines the accessibility of variables. Understanding scope is critical for preventing bugs and writing predictable code.</p>
        
        <div class="three-column-layout">
          <div class="column">
            <h5>1. GLOBAL SCOPE</h5>
            <p><strong>Keyword:</strong> <code>Global</code></p>
            <p>A variable declared outside any function or block. It can be accessed from anywhere in the code.</p>
            <pre><code>let globalVar = "I'm everywhere!";\n\nfunction showVar() {\n  console.log(globalVar);\n}</code></pre>
          </div>
          <div class="column">
            <h5>2. FUNCTION SCOPE</h5>
            <p><strong>Keyword:</strong> <code>Function</code></p>
            <p>A variable declared inside a function. It cannot be accessed from outside that function.</p>
            <pre><code>function hideVar() {\n  let functionVar = "I'm hidden!";\n}\n// console.log(functionVar); // Error!</code></pre>
          </div>
          <div class="column">
            <h5>3. BLOCK SCOPE</h5>
            <p><strong>Keyword:</strong> <code>Block</code></p>
            <p>A variable declared with <code>let</code> or <code>const</code> inside a block <code>{...}</code>. It's confined to that block.</p>
            <pre><code>if (true) {\n  let blockVar = "Just in this block";\n}\n// console.log(blockVar); // Error!</code></pre>
          </div>
        </div>
        <hr>
        <h5>Hoisting & The Temporal Dead Zone (TDZ)</h5>
        <p><strong>Hoisting</strong> is JavaScript's behavior of moving declarations to the top of their scope. <code>var</code> is initialized as <code>undefined</code>, while <code>let</code> and <code>const</code> are not, creating a "Temporal Dead Zone" where they cannot be accessed before declaration.</p>
        <hr>
        <h5>Variable Declaration Comparison</h5>
        <table class="analogy-table">
          <thead>
            <tr><th>Feature</th><th>var</th><th>let</th><th>const</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Scope</strong></td><td>Function or Global</td><td>Block ({})</td><td>Block ({})</td></tr>
            <tr><td><strong>Hoisting</strong></td><td>Hoisted & initialized</td><td>Hoisted, not initialized (TDZ)</td><td>Hoisted, not initialized (TDZ)</td></tr>
            <tr><td><strong>Reassignable?</strong></td><td>Yes</td><td>Yes</td><td>No</td></tr>
            <tr><td><strong>Redeclarable?</strong></td><td>Yes</td><td>No</td><td>No</td></tr>
          </tbody>
        </table>
      `,
      code: null,
      mindMap: {
        center: 'Variable Scope',
        nodes: [
          { title: 'Global Scope', keyword: 'Global', description: 'Accessible from anywhere in the code.' },
          { title: 'Function Scope', keyword: 'Function', description: 'Accessible only inside the function where it is declared.' },
          { title: 'Block Scope', keyword: 'Block', description: 'Accessible only inside the code block `{...}` where it is declared.' },
          { title: 'Hoisting', keyword: 'Hoisting', description: 'Declarations are moved to the top of their scope during compilation.' },
        ]
      }
    },
    {
      id: 'closures',
      title: '4.2 The Power of Closures',
      icon: 'fa-memory',
      content: `
        <h4>Core Concept: Functions That Remember</h4>
        <p>A <strong>closure</strong> is a function that "remembers" the variables from the scope where it was created, even if it's called in a different scope. This is one of JavaScript's most powerful features.</p>
        
        <h5>1. THE MECHANISM</h5>
        <p><strong>Keyword:</strong> <code>Lexical Environment</code></p>
        <p>A closure is the combination of a function and its lexical environment (the scope chain from where it was defined). The inner function "closes over" the variables of its outer function.</p>
        <p><strong>Example (Function Factory):</strong></p>
        <pre><code>function makeAdder(x) {\n  // The inner function is a closure, it remembers 'x'\n  return function(y) {\n    return x + y;\n  };\n}\n\nlet add5 = makeAdder(5);\nconsole.log(add5(2)); // Output: 7</code></pre>
        <hr>

        <h5>2. PRACTICAL APPLICATIONS</h5>
        <p><strong>Keyword:</strong> <code>Encapsulation</code></p>
        <p>Closures are used to create private variables and methods, a core concept of object-oriented programming. They allow you to hide implementation details and expose a public interface.</p>
        <p><strong>Example (Private Counter):</strong></p>
        <pre><code>function createCounter() {\n  let count = 0; // 'count' is a private variable\n\n  return {\n    increment: function() { count++; },\n    getValue: function() { return count; }\n  };\n}\n\nconst counter = createCounter();\ncounter.increment();\nconsole.log(counter.getValue()); // Output: 1\n// console.log(counter.count); // undefined (cannot access private var)</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Closures',
        nodes: [
          { title: 'The Concept', keyword: 'Function with Memory', description: 'A function that remembers variables from its creation scope.' },
          { title: 'The "Why"', keyword: 'Lexical Scoping', description: 'Scope is determined by where code is written, not where it is called.' },
          { title: 'The Use Case', keyword: 'Data Encapsulation', description: 'Creating private variables and methods that cannot be accessed from outside.' },
        ]
      }
    },
    {
      id: 'this-keyword',
      title: '4.3 The Enigma of "this"',
      icon: 'fa-user-secret',
      content: `
        <h4>Core Concept: The Invocation Context</h4>
        <p>The <code>this</code> keyword is a reference to an object, but its value is dynamic. The cardinal rule is: the value of <strong>this</strong> is determined by <strong>how a function is called</strong>, not where it is defined.</p>
        
        <h5>1. IMPLICIT BINDING</h5>
        <p><strong>Keyword:</strong> <code>Method Invocation</code></p>
        <p>When a function is called as a method of an object, <code>this</code> is bound to the object the method is called on (the object to the left of the dot).</p>
        <p><strong>Example:</strong></p>
        <pre><code>const person = {\n  name: 'VQM',\n  greet: function() {\n    console.log('Hello, ' + this.name);\n  }\n};\n\nperson.greet(); // 'this' refers to 'person'. Output: Hello, VQM</code></pre>
        <hr>

        <h5>2. DEFAULT/GLOBAL BINDING</h5>
        <p><strong>Keyword:</strong> <code>Standalone Invocation</code></p>
        <p>When a function is called by itself (not as a method), <code>this</code> defaults to the global object (<code>window</code> in browsers) or <code>undefined</code> in strict mode.</p>
        <p><strong>Example:</strong></p>
        <pre><code>function showThis() {\n  console.log(this);\n}\n\nshowThis(); // In a browser, 'this' would be the window object.</code></pre>
        <hr>
        
        <h5>3. THE MODERN SOLUTION</h5>
        <p><strong>Keyword:</strong> <code>Arrow Functions</code></p>
        <p>Arrow functions (<code>=></code>) do not have their own <code>this</code> binding. Instead, they lexically inherit <code>this</code> from their parent scope. This makes them predictable and solves many common issues with <code>this</code>.</p>
        <p><strong>Example:</strong></p>
        <pre><code>const person = {\n  name: 'VQM',\n  greet: function() {\n    // Arrow function inherits 'this' from greet\n    setTimeout(() => {\n      console.log('Hello, ' + this.name);\n    }, 1000);\n  }\n};\n\nperson.greet(); // After 1s, logs: Hello, VQM</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'The "this" Keyword',
        nodes: [
          { title: 'The Rule', keyword: 'Invocation Context', description: 'The value of `this` depends on HOW a function is called.' },
          { title: 'As a Method', keyword: 'Implicit Binding', description: '`this` is the object to the left of the dot.' },
          { title: 'As a Function', keyword: 'Default Binding', description: '`this` is the global object (e.g., window) or undefined.' },
          { title: 'The Exception', keyword: 'Arrow Functions', description: 'Inherit `this` from their parent scope; they do not have their own.' },
        ]
      }
    },
    {
      id: 'async-js',
      title: '4.4 Asynchronous JavaScript',
      icon: 'fa-clock',
      content: `
        <h4>Core Concept: Handling Delays</h4>
        <p>JavaScript is single-threaded, meaning it can only do one thing at a time. <strong>Asynchronous</strong> programming prevents the UI from freezing during long-running tasks like network requests.</p>
        
        <div class="three-column-layout">
          <div class="column">
            <h5>1. THE OLD WAY</h5>
            <p><strong>Keyword:</strong> <code>Callbacks</code></p>
            <p>A function passed as an argument to be executed after an operation completes. Can lead to "Callback Hell."</p>
            <pre><code>getData(function(a) {\n  getMoreData(a, function(b) {\n    // ...and so on\n  });\n});</code></pre>
          </div>
          <div class="column">
            <h5>2. THE BETTER WAY</h5>
            <p><strong>Keyword:</strong> <code>Promises</code></p>
            <p>An object representing the eventual completion or failure of an async operation. Allows for cleaner chaining with <code>.then()</code>.</p>
            <pre><code>getData()\n  .then(a => getMoreData(a))\n  .then(b => ...)\n  .catch(err => ...);</code></pre>
          </div>
          <div class="column">
            <h5>3. THE MODERN WAY</h5>
            <p><strong>Keyword:</strong> <code>async/await</code></p>
            <p>Syntactic sugar over Promises that makes async code look synchronous, improving readability.</p>
            <pre><code>async function fetchData() {\n  const a = await getData();\n  const b = await getMoreData(a);\n}</code></pre>
          </div>
        </div>
      `,
      code: null,
      mindMap: {
        center: 'Async Operations',
        nodes: [
          { title: 'The Old Way', keyword: 'Callbacks', description: 'A function passed as an argument to run later.' },
          { title: 'The Better Way', keyword: 'Promises', description: 'An object representing a future value.' },
          { title: 'The Modern Way', keyword: 'async/await', description: 'Syntax to make asynchronous code look synchronous.' },
        ]
      }
    },
    {
      id: 'prototypal-inheritance',
      title: '4.5 Prototypal Inheritance',
      icon: 'fa-project-diagram',
      content: `
        <h4>Core Concept: The Blueprint of Objects</h4>
        <p>JavaScript's inheritance model is <strong>prototypal</strong>. Objects inherit directly from other objects. There are no true classes, only objects linked to other objects.</p>
        
        <h5>1. THE CHAIN</h5>
        <p><strong>Keyword:</strong> <code>Prototype Chain</code></p>
        <p>Every object has a hidden link to another object called its prototype. When a property is accessed, JavaScript searches up this chain until it's found or the chain ends.</p>
        <p><strong>Example:</strong></p>
        <pre><code>// 'myArray' inherits methods like .push() from Array.prototype\nlet myArray = [];</code></pre>
        <hr>

        <h5>2. THE OLD WAY</h5>
        <p><strong>Keyword:</strong> <code>Constructor Functions</code></p>
        <p>A regular function called with the <code>new</code> keyword. It creates a new object and links its prototype to the function's <code>.prototype</code> property.</p>
        <p><strong>Example:</strong></p>
        <pre><code>function Dog(name) {\n  this.name = name;\n}\nDog.prototype.bark = function() { console.log('Woof!'); };\n\nconst myDog = new Dog('Rex');\nmyDog.bark(); // 'myDog' inherits 'bark'</code></pre>
        <hr>

        <h5>3. THE MODERN WAY</h5>
        <p><strong>Keyword:</strong> <code>class</code></p>
        <p>The <code>class</code> keyword is modern syntactic sugar over constructor functions. It provides a cleaner, more familiar syntax but uses the same prototypal inheritance mechanism underneath.</p>
        <p><strong>Example:</strong></p>
        <pre><code>class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n  bark() {\n    console.log('Woof!');\n  }\n}\n\nconst myDog = new Dog('Rex');\nmyDog.bark();</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Inheritance',
        nodes: [
          { title: 'The Mechanism', keyword: 'Prototype Chain', description: 'Objects are linked, inheriting properties from objects up the chain.' },
          { title: 'The Old Way', keyword: 'Constructor Function', description: 'A function used with `new` to create object instances.' },
          { title: 'The Modern Way', keyword: 'class', description: 'Syntactic sugar that provides a cleaner syntax for constructors.' },
        ]
      }
    },
    {
      id: 'modules',
      title: '4.6 ES6 Modules',
      icon: 'fa-cubes',
      content: `
        <h4>Core Concept: Code Organization and Reusability</h4>
        <p><strong>Modules</strong> allow you to split your code into separate files and import/export functionality between them. This promotes code organization, reusability, and maintainability.</p>

        <h5>1. EXPORTING FROM A MODULE</h5>
        <p><strong>Keyword:</strong> <code>export</code></p>
        <p>You can export functions, objects, or primitive values from a module so they can be used by other modules.</p>
        <p><strong>Named Exports:</strong></p>
        <pre><code>// math.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;</code></pre>
        <p><strong>Default Export:</strong></p>
        <pre><code>// calculator.js
export default class Calculator {
  add(a, b) { return a + b; }
}</code></pre>
        <hr>

        <h5>2. IMPORTING INTO A MODULE</h5>
        <p><strong>Keyword:</strong> <code>import</code></p>
        <p>Use the <code>import</code> statement to bring in exported functionality from other modules.</p>
        <p><strong>Named Imports:</strong></p>
        <pre><code>import { add, PI } from './math.js';
console.log(add(2, 3)); // 5
console.log(PI); // 3.14159</code></pre>
        <p><strong>Default Import:</strong></p>
        <pre><code>import Calculator from './calculator.js';
const calc = new Calculator();</code></pre>
        <p><strong>Import All:</strong></p>
        <pre><code>import * as math from './math.js';
console.log(math.add(2, 3)); // 5</code></pre>
        <hr>

        <h5>3. BENEFITS OF MODULES</h5>
        <ul>
          <li><strong>Encapsulation:</strong> Each module has its own scope, preventing global namespace pollution.</li>
          <li><strong>Dependency Management:</strong> Explicit imports make it clear what code depends on what.</li>
          <li><strong>Reusability:</strong> Write code once, import it anywhere.</li>
          <li><strong>Maintainability:</strong> Smaller, focused files are easier to understand and maintain.</li>
        </ul>
      `,
      code: null,
      mindMap: {
        center: 'ES6 Modules',
        nodes: [
          { title: 'Export', keyword: 'export', description: 'Make functions, objects, or values available to other modules.' },
          { title: 'Import', keyword: 'import', description: 'Bring in functionality from other modules.' },
          { title: 'Default Export', keyword: 'export default', description: 'Export a single main value from a module.' },
          { title: 'Named Exports', keyword: 'export { }', description: 'Export multiple named values from a module.' },
        ]
      }
    },
    {
      id: 'destructuring-spread',
      title: '4.7 Destructuring & Spread Operators',
      icon: 'fa-expand-arrows-alt',
      content: `
        <h4>Core Concept: Unpacking and Spreading Values</h4>
        <p>Destructuring and spread operators are modern ES6 features that make it easier to work with arrays and objects by unpacking or spreading their values.</p>

        <h5>1. ARRAY DESTRUCTURING</h5>
        <p><strong>Keyword:</strong> <code>[ ]</code></p>
        <p>Extract values from an array into individual variables.</p>
        <pre><code>const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first); // 'red'

// Skip elements
const [primary, , tertiary] = colors;
console.log(tertiary); // 'blue'</code></pre>
        <hr>

        <h5>2. OBJECT DESTRUCTURING</h5>
        <p><strong>Keyword:</strong> <code>{ }</code></p>
        <p>Extract properties from an object into individual variables.</p>
        <pre><code>const user = { name: 'Alice', age: 25, city: 'NYC' };
const { name, age } = user;
console.log(name); // 'Alice'

// Rename variables
const { name: userName, age: userAge } = user;
console.log(userName); // 'Alice'

// Default values
const { country = 'USA' } = user;
console.log(country); // 'USA'</code></pre>
        <hr>

        <h5>3. SPREAD OPERATOR (...)</h5>
        <p><strong>Keyword:</strong> <code>...</code></p>
        <p>The spread operator expands an array or object into individual elements.</p>
        <p><strong>Array Spread:</strong></p>
        <pre><code>const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1]; // [1, 2, 3]</code></pre>
        <p><strong>Object Spread:</strong></p>
        <pre><code>const defaults = { theme: 'dark', lang: 'en' };
const userSettings = { lang: 'fr', fontSize: 14 };
const settings = { ...defaults, ...userSettings };
// { theme: 'dark', lang: 'fr', fontSize: 14 }</code></pre>
        <hr>

        <h5>4. PRACTICAL USE CASES</h5>
        <pre><code>// Function parameters
function greet({ name, age }) {
  console.log(\`Hello \${name}, age \${age}\`);
}
greet({ name: 'Bob', age: 30 });

// React props destructuring
function Button({ label, onClick }) {
  return &lt;button onClick={onClick}&gt;{label}&lt;/button&gt;;
}</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Destructuring & Spread',
        nodes: [
          { title: 'Array Destructuring', keyword: '[ ]', description: 'Unpack array values into variables.' },
          { title: 'Object Destructuring', keyword: '{ }', description: 'Extract object properties into variables.' },
          { title: 'Spread Operator', keyword: '...', description: 'Expand arrays or objects into individual elements.' },
        ]
      }
    },
    {
      id: 'default-parameters',
      title: '4.8 Default Parameters',
      icon: 'fa-sliders-h',
      content: `
        <h4>Core Concept: Function Parameter Defaults</h4>
        <p><strong>Default parameters</strong> allow you to specify default values for function parameters if no value or <code>undefined</code> is passed.</p>

        <h5>1. BASIC SYNTAX</h5>
        <p><strong>Keyword:</strong> <code>=</code></p>
        <p>Assign a default value directly in the parameter list.</p>
        <pre><code>function greet(name = 'Guest') {
  console.log(\`Hello, \${name}!\`);
}

greet('Alice'); // "Hello, Alice!"
greet();        // "Hello, Guest!"</code></pre>
        <hr>

        <h5>2. MULTIPLE DEFAULT PARAMETERS</h5>
        <pre><code>function createUser(name = 'Anonymous', role = 'user', active = true) {
  return { name, role, active };
}

console.log(createUser());
// { name: 'Anonymous', role: 'user', active: true }

console.log(createUser('Bob', 'admin'));
// { name: 'Bob', role: 'admin', active: true }</code></pre>
        <hr>

        <h5>3. DEFAULT VALUES WITH EXPRESSIONS</h5>
        <p>Default values can be expressions, including function calls.</p>
        <pre><code>function getDefaultId() {
  return Math.random().toString(36).substr(2, 9);
}

function createItem(name, id = getDefaultId()) {
  return { name, id };
}

console.log(createItem('Book'));
// { name: 'Book', id: 'x7k2m9p1q' }</code></pre>
        <hr>

        <h5>4. BEFORE ES6 (OLD WAY)</h5>
        <pre><code>// Old approach using || operator
function greet(name) {
  name = name || 'Guest';
  console.log('Hello, ' + name);
}

// Problem: falsy values like 0, '', false are replaced
function add(a, b) {
  a = a || 0;  // If a is 0, it becomes 0 (unexpected!)
  b = b || 0;
  return a + b;
}</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Default Parameters',
        nodes: [
          { title: 'The Syntax', keyword: 'param = value', description: 'Assign default values directly in function parameters.' },
          { title: 'The Trigger', keyword: 'undefined', description: 'Defaults are used when parameter is undefined or not passed.' },
          { title: 'The Power', keyword: 'Expressions', description: 'Default values can be expressions or function calls.' },
        ]
      }
    },
    {
      id: 'rest-parameters',
      title: '4.9 Rest Parameters',
      icon: 'fa-ellipsis-h',
      content: `
        <h4>Core Concept: Variable Number of Arguments</h4>
        <p><strong>Rest parameters</strong> allow a function to accept an indefinite number of arguments as an array, replacing the older <code>arguments</code> object.</p>

        <h5>1. BASIC SYNTAX</h5>
        <p><strong>Keyword:</strong> <code>...paramName</code></p>
        <p>The rest parameter must be the last parameter in the function definition.</p>
        <pre><code>function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15</code></pre>
        <hr>

        <h5>2. COMBINING WITH REGULAR PARAMETERS</h5>
        <pre><code>function introduce(greeting, ...names) {
  return \`\${greeting} \${names.join(', ')}!\`;
}

console.log(introduce('Hello', 'Alice', 'Bob', 'Charlie'));
// "Hello Alice, Bob, Charlie!"</code></pre>
        <hr>

        <h5>3. REST VS SPREAD</h5>
        <p>While they use the same <code>...</code> syntax, they serve opposite purposes:</p>
        <ul>
          <li><strong>Rest Parameters:</strong> Collect multiple arguments into an array (function definition)</li>
          <li><strong>Spread Operator:</strong> Expand an array into individual arguments (function call)</li>
        </ul>
        <pre><code>// REST: Collecting arguments
function multiply(...numbers) {
  return numbers.reduce((a, b) => a * b, 1);
}

// SPREAD: Expanding array
const nums = [2, 3, 4];
console.log(multiply(...nums)); // 24</code></pre>
        <hr>

        <h5>4. BEFORE ES6 (ARGUMENTS OBJECT)</h5>
        <pre><code>// Old way using 'arguments' object
function oldSum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Problems with arguments:
// - Not a real array (no array methods)
// - Not available in arrow functions
// - Less clear intent</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Rest Parameters',
        nodes: [
          { title: 'The Syntax', keyword: '...params', description: 'Collect remaining arguments into an array.' },
          { title: 'The Rule', keyword: 'Last Parameter', description: 'Rest parameter must be the last parameter.' },
          { title: 'The Difference', keyword: 'vs Spread', description: 'Rest collects, Spread expands.' },
        ]
      }
    },
    {
      id: 'optional-chaining',
      title: '4.10 Optional Chaining (?.)',
      icon: 'fa-link',
      content: `
        <h4>Core Concept: Safe Property Access</h4>
        <p><strong>Optional chaining</strong> (<code>?.</code>) allows you to safely access nested object properties without worrying about <code>null</code> or <code>undefined</code> values causing errors.</p>

        <h5>1. BASIC SYNTAX</h5>
        <p><strong>Keyword:</strong> <code>?.</code></p>
        <p>If the value before <code>?.</code> is <code>null</code> or <code>undefined</code>, the expression short-circuits and returns <code>undefined</code>.</p>
        <pre><code>const user = {
  name: 'Alice',
  address: {
    city: 'NYC'
  }
};

console.log(user.address?.city);        // 'NYC'
console.log(user.contact?.email);       // undefined (no error!)
console.log(user.contact.email);        // Error: Cannot read property 'email' of undefined</code></pre>
        <hr>

        <h5>2. ARRAY ELEMENT ACCESS</h5>
        <pre><code>const users = [
  { name: 'Alice' },
  { name: 'Bob' }
];

console.log(users[0]?.name);   // 'Alice'
console.log(users[5]?.name);   // undefined
console.log(users?.[0]?.name); // 'Alice' (also checks if users exists)</code></pre>
        <hr>

        <h5>3. FUNCTION CALLS</h5>
        <p>Use <code>?.()</code> to safely call methods that might not exist.</p>
        <pre><code>const user = {
  name: 'Alice',
  greet: function() { return 'Hello!'; }
};

console.log(user.greet?.());      // 'Hello!'
console.log(user.farewell?.());   // undefined (no error!)

// Callback functions
const config = {};
config.onSuccess?.();  // Safe call, does nothing if undefined</code></pre>
        <hr>

        <h5>4. BEFORE OPTIONAL CHAINING</h5>
        <pre><code>// Old way: Manual null checks
const city = user && user.address && user.address.city;

// Or using try-catch
let email;
try {
  email = user.contact.email;
} catch (e) {
  email = undefined;
}

// New way: Much cleaner!
const city = user?.address?.city;
const email = user?.contact?.email;</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Optional Chaining',
        nodes: [
          { title: 'Object Properties', keyword: 'obj?.prop', description: 'Safely access nested properties.' },
          { title: 'Array Elements', keyword: 'arr?.[index]', description: 'Safely access array elements.' },
          { title: 'Function Calls', keyword: 'func?.()', description: 'Safely call functions that might not exist.' },
        ]
      }
    },
    {
      id: 'nullish-coalescing',
      title: '4.11 Nullish Coalescing (??)',
      icon: 'fa-question-circle',
      content: `
        <h4>Core Concept: Default Values for Null/Undefined</h4>
        <p>The <strong>nullish coalescing operator</strong> (<code>??</code>) returns the right-hand operand when the left-hand operand is <code>null</code> or <code>undefined</code>, and otherwise returns the left-hand operand.</p>

        <h5>1. BASIC SYNTAX</h5>
        <p><strong>Keyword:</strong> <code>??</code></p>
        <pre><code>const username = null;
const displayName = username ?? 'Guest';
console.log(displayName); // 'Guest'

const age = 0;
const userAge = age ?? 18;
console.log(userAge); // 0 (not 18!)</code></pre>
        <hr>

        <h5>2. THE PROBLEM WITH || (OR OPERATOR)</h5>
        <p>The <code>||</code> operator treats all falsy values (<code>0</code>, <code>''</code>, <code>false</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>) the same way.</p>
        <pre><code>// Using ||
const count = 0;
const display1 = count || 10;
console.log(display1); // 10 (unexpected! 0 is valid)

// Using ??
const display2 = count ?? 10;
console.log(display2); // 0 (correct! only null/undefined trigger default)</code></pre>
        <hr>

        <h5>3. PRACTICAL EXAMPLES</h5>
        <pre><code>// Configuration with defaults
function loadConfig(userConfig) {
  const config = {
    theme: userConfig.theme ?? 'light',
    volume: userConfig.volume ?? 50,
    autoplay: userConfig.autoplay ?? false
  };
  return config;
}

console.log(loadConfig({ volume: 0 }));
// { theme: 'light', volume: 0, autoplay: false }
// volume is 0, not 50!

// Form input handling
const formData = {
  name: '',
  age: 0
};

const name = formData.name ?? 'No name';
console.log(name); // '' (empty string is not null/undefined)

const age = formData.age ?? 18;
console.log(age); // 0 (zero is not null/undefined)</code></pre>
        <hr>

        <h5>4. COMBINING WITH OPTIONAL CHAINING</h5>
        <pre><code>const user = {
  profile: {
    settings: {
      theme: null
    }
  }
};

const theme = user?.profile?.settings?.theme ?? 'light';
console.log(theme); // 'light'</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'Nullish Coalescing',
        nodes: [
          { title: 'The Operator', keyword: '??', description: 'Returns right side only if left is null or undefined.' },
          { title: 'vs OR (||)', keyword: 'Only nullish', description: 'Unlike ||, treats 0, false, "" as valid values.' },
          { title: 'Use Case', keyword: 'Default Values', description: 'Provide defaults only for null/undefined, not all falsy values.' },
        ]
      }
    },
    {
      id: 'symbol-type',
      title: '4.12 Symbol Type',
      icon: 'fa-fingerprint',
      content: `
        <h4>Core Concept: Unique Identifiers</h4>
        <p><strong>Symbol</strong> is a primitive data type introduced in ES6. Every Symbol value is unique and immutable, making it perfect for creating unique property keys.</p>

        <h5>1. CREATING SYMBOLS</h5>
        <p><strong>Keyword:</strong> <code>Symbol()</code></p>
        <pre><code>const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2); // false (always unique!)

// With description (for debugging)
const id = Symbol('id');
console.log(id.toString()); // 'Symbol(id)'</code></pre>
        <hr>

        <h5>2. SYMBOLS AS OBJECT KEYS</h5>
        <p>Symbols can be used as unique property keys that won't conflict with string keys.</p>
        <pre><code>const ID = Symbol('id');
const user = {
  name: 'Alice',
  [ID]: 12345  // Symbol as property key
};

console.log(user[ID]); // 12345
console.log(user.ID);  // undefined

// Symbols are hidden from normal iteration
console.log(Object.keys(user));        // ['name']
console.log(JSON.stringify(user));     // {"name":"Alice"}
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]</code></pre>
        <hr>

        <h5>3. GLOBAL SYMBOL REGISTRY</h5>
        <p><strong>Keyword:</strong> <code>Symbol.for()</code></p>
        <p>Create symbols that can be shared across different parts of your code.</p>
        <pre><code>// Create or retrieve global symbol
const globalSym1 = Symbol.for('app.id');
const globalSym2 = Symbol.for('app.id');
console.log(globalSym1 === globalSym2); // true

// Get key from symbol
console.log(Symbol.keyFor(globalSym1)); // 'app.id'</code></pre>
        <hr>

        <h5>4. WELL-KNOWN SYMBOLS</h5>
        <p>JavaScript provides built-in symbols that modify object behavior.</p>
        <pre><code>// Symbol.iterator - make object iterable
const myCollection = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => ({
        value: this.data[index++],
        done: index > this.data.length
      })
    };
  }
};

for (let item of myCollection) {
  console.log(item); // 1, 2, 3
}

// Other well-known symbols:
// Symbol.toStringTag, Symbol.toPrimitive, Symbol.hasInstance, etc.</code></pre>
        <hr>

        <h5>5. USE CASES</h5>
        <ul>
          <li><strong>Private Properties:</strong> Create properties that won't appear in normal enumeration</li>
          <li><strong>Avoid Conflicts:</strong> Ensure property names don't clash with other code</li>
          <li><strong>Meta-programming:</strong> Customize object behavior using well-known symbols</li>
        </ul>
      `,
      code: null,
      mindMap: {
        center: 'Symbol',
        nodes: [
          { title: 'Uniqueness', keyword: 'Symbol()', description: 'Every symbol is unique, even with same description.' },
          { title: 'Hidden Keys', keyword: 'Property Keys', description: 'Symbol keys are hidden from normal object iteration.' },
          { title: 'Global Registry', keyword: 'Symbol.for()', description: 'Share symbols across different scopes.' },
          { title: 'Well-Known', keyword: 'Built-in Symbols', description: 'Control object behavior with special symbols.' },
        ]
      }
    },
    {
      id: 'weakmap-weakset',
      title: '4.13 WeakMap & WeakSet',
      icon: 'fa-trash-alt',
      content: `
        <h4>Core Concept: Garbage-Collection-Friendly Collections</h4>
        <p><strong>WeakMap</strong> and <strong>WeakSet</strong> are special collections that hold "weak" references to objects, allowing them to be garbage collected if there are no other references.</p>

        <h5>1. WEAKMAP BASICS</h5>
        <p><strong>Keyword:</strong> <code>WeakMap</code></p>
        <p>A WeakMap is a collection of key-value pairs where keys must be objects and are held weakly.</p>
        <pre><code>const wm = new WeakMap();

let user = { name: 'Alice' };
wm.set(user, 'user data');

console.log(wm.get(user)); // 'user data'
console.log(wm.has(user)); // true

// When user is set to null, it can be garbage collected
user = null;
// The entry in WeakMap is automatically removed</code></pre>
        <hr>

        <h5>2. WEAKMAP VS MAP</h5>
        <table class="analogy-table">
          <thead>
            <tr><th>Feature</th><th>Map</th><th>WeakMap</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Keys</strong></td><td>Any type</td><td>Objects only</td></tr>
            <tr><td><strong>Garbage Collection</strong></td><td>Prevents GC</td><td>Allows GC</td></tr>
            <tr><td><strong>Iteration</strong></td><td>Iterable (.keys(), .values(), .forEach())</td><td>Not iterable</td></tr>
            <tr><td><strong>Size</strong></td><td>.size property</td><td>No .size property</td></tr>
          </tbody>
        </table>
        <hr>

        <h5>3. WEAKMAP USE CASES</h5>
        <p><strong>Private Data Storage:</strong></p>
        <pre><code>const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { name });
  }

  getName() {
    return privateData.get(this).name;
  }
}

const user = new User('Alice');
console.log(user.getName()); // 'Alice'
// Cannot access private data directly</code></pre>
        <p><strong>Caching/Memoization:</strong></p>
        <pre><code>const cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    const result = expensiveComputation(obj);
    cache.set(obj, result);
  }
  return cache.get(obj);
}

// When obj is no longer referenced, cache entry is auto-removed</code></pre>
        <hr>

        <h5>4. WEAKSET BASICS</h5>
        <p><strong>Keyword:</strong> <code>WeakSet</code></p>
        <p>A WeakSet is a collection of objects only, held weakly.</p>
        <pre><code>const ws = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1)); // true

obj1 = null; // obj1 can now be garbage collected</code></pre>
        <hr>

        <h5>5. WEAKSET USE CASES</h5>
        <p><strong>Tracking Object State:</strong></p>
        <pre><code>const processedObjects = new WeakSet();

function processOnce(obj) {
  if (processedObjects.has(obj)) {
    console.log('Already processed');
    return;
  }

  // Process the object
  console.log('Processing:', obj);
  processedObjects.add(obj);
}</code></pre>
      `,
      code: null,
      mindMap: {
        center: 'WeakMap & WeakSet',
        nodes: [
          { title: 'WeakMap', keyword: 'Weak Key-Value', description: 'Map with object keys held weakly.' },
          { title: 'WeakSet', keyword: 'Weak Objects', description: 'Set of objects held weakly.' },
          { title: 'Garbage Collection', keyword: 'Auto Cleanup', description: 'Entries removed when objects are no longer referenced.' },
          { title: 'Use Cases', keyword: 'Private Data', description: 'Store private data, caching, tracking state.' },
        ]
      }
    },
    {
      id: 'proxy-reflect',
      title: '4.14 Proxy & Reflect',
      icon: 'fa-mirror',
      content: `
        <h4>Core Concept: Meta-programming in JavaScript</h4>
        <p><strong>Proxy</strong> allows you to intercept and customize fundamental operations on objects. <strong>Reflect</strong> provides methods for interceptable JavaScript operations.</p>

        <h5>1. PROXY BASICS</h5>
        <p><strong>Keyword:</strong> <code>new Proxy(target, handler)</code></p>
        <p>A Proxy wraps an object and intercepts operations on it through "traps" defined in a handler object.</p>
        <pre><code>const target = { name: 'Alice', age: 25 };

const handler = {
  get(target, property) {
    console.log(\`Getting \${property}\`);
    return target[property];
  },
  set(target, property, value) {
    console.log(\`Setting \${property} to \${value}\`);
    target[property] = value;
    return true; // Indicates success
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Logs: "Getting name", then "Alice"
proxy.age = 26;          // Logs: "Setting age to 26"</code></pre>
        <hr>

        <h5>2. COMMON PROXY TRAPS</h5>
        <ul>
          <li><strong>get(target, property, receiver)</strong> - Intercept property access</li>
          <li><strong>set(target, property, value, receiver)</strong> - Intercept property assignment</li>
          <li><strong>has(target, property)</strong> - Intercept 'in' operator</li>
          <li><strong>deleteProperty(target, property)</strong> - Intercept 'delete' operator</li>
          <li><strong>apply(target, thisArg, args)</strong> - Intercept function calls</li>
          <li><strong>construct(target, args)</strong> - Intercept 'new' operator</li>
        </ul>
        <hr>

        <h5>3. PRACTICAL PROXY EXAMPLES</h5>
        <p><strong>Validation:</strong></p>
        <pre><code>const validator = {
  set(target, property, value) {
    if (property === 'age') {
      if (typeof value !== 'number' || value < 0) {
        throw new TypeError('Age must be a positive number');
      }
    }
    target[property] = value;
    return true;
  }
};

const person = new Proxy({}, validator);
person.age = 25;  // OK
person.age = -5;  // Error: Age must be a positive number</code></pre>
        <p><strong>Default Values:</strong></p>
        <pre><code>const withDefaults = (target, defaults) => {
  return new Proxy(target, {
    get(target, property) {
      return property in target ? target[property] : defaults[property];
    }
  });
};

const settings = withDefaults({}, { theme: 'light', lang: 'en' });
console.log(settings.theme); // 'light' (from defaults)
console.log(settings.lang);  // 'en' (from defaults)</code></pre>
        <p><strong>Negative Array Indexing:</strong></p>
        <pre><code>const negativeArray = (array) => {
  return new Proxy(array, {
    get(target, property) {
      const index = Number(property);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[property];
    }
  });
};

const arr = negativeArray([1, 2, 3, 4, 5]);
console.log(arr[-1]); // 5 (last element)
console.log(arr[-2]); // 4 (second to last)</code></pre>
        <hr>

        <h5>4. REFLECT API</h5>
        <p><strong>Keyword:</strong> <code>Reflect</code></p>
        <p>Reflect provides methods that mirror Proxy traps, offering a cleaner way to perform default operations.</p>
        <pre><code>const handler = {
  get(target, property, receiver) {
    console.log(\`Accessing: \${property}\`);
    // Use Reflect for default behavior
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value, receiver) {
    console.log(\`Setting: \${property} = \${value}\`);
    return Reflect.set(target, property, value, receiver);
  }
};

const obj = new Proxy({ x: 10 }, handler);
console.log(obj.x);  // Logs access, returns 10
obj.x = 20;          // Logs setting</code></pre>
        <hr>

        <h5>5. REFLECT METHODS</h5>
        <pre><code>// Same methods as Proxy traps
Reflect.get(target, property);
Reflect.set(target, property, value);
Reflect.has(target, property);
Reflect.deleteProperty(target, property);
Reflect.apply(func, thisArg, args);
Reflect.construct(target, args);

// Additional utility methods
Reflect.ownKeys(target);           // Get all keys (including symbols)
Reflect.getPrototypeOf(target);    // Get prototype
Reflect.setPrototypeOf(target, proto); // Set prototype</code></pre>
        <hr>

        <h5>6. USE CASES</h5>
        <ul>
          <li><strong>Validation:</strong> Enforce constraints on object properties</li>
          <li><strong>Logging:</strong> Track property access and modifications</li>
          <li><strong>Data Binding:</strong> Automatically update UI when data changes (Vue.js uses this!)</li>
          <li><strong>API Wrapping:</strong> Add functionality to existing objects without modifying them</li>
          <li><strong>Lazy Loading:</strong> Load properties on-demand</li>
        </ul>
      `,
      code: null,
      mindMap: {
        center: 'Proxy & Reflect',
        nodes: [
          { title: 'Proxy', keyword: 'Intercept Operations', description: 'Wrap objects to customize their behavior.' },
          { title: 'Traps', keyword: 'Handler Methods', description: 'Functions that intercept operations (get, set, etc.).' },
          { title: 'Reflect', keyword: 'Default Operations', description: 'Provides methods to perform default object operations.' },
          { title: 'Use Cases', keyword: 'Validation, Logging', description: 'Validation, data binding, API wrapping, etc.' },
        ]
      }
    },
    {
      id: 'part-4-summary',
      title: 'Part IV Summary',
      icon: 'fa-table',
      content: `
        <h5>Consolidated Reference Guide for Part IV</h5>
        <p>This table summarizes the advanced mechanics of JavaScript.</p>
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
              <td><strong>Scope</strong></td>
              <td><code>Global</code>, <code>Function</code>, <code>Block</code></td>
              <td>Defines where variables are accessible.</td>
            </tr>
            <tr>
              <td><strong>Closure</strong></td>
              <td><code>Lexical Environment</code></td>
              <td>A function that remembers variables from its creation scope.</td>
            </tr>
            <tr>
              <td><strong>"this" Keyword</strong></td>
              <td><code>this</code>, <code>=></code></td>
              <td>A reference to an object, determined by how a function is called.</td>
            </tr>
            <tr>
              <td><strong>Asynchronous</strong></td>
              <td><code>Promise</code>, <code>async/await</code></td>
              <td>Handles delays and long-running tasks without freezing the UI.</td>
            </tr>
            <tr>
              <td><strong>Inheritance</strong></td>
              <td><code>prototype</code>, <code>class</code></td>
              <td>How objects get properties and methods from other objects.</td>
            </tr>
          </tbody>
        </table>
      `,
      code: null,
      mindMap: null
    }
  ]
};
