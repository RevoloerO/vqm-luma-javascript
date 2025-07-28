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
