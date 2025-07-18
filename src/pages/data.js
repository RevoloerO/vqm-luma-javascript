export const lumaData = {
  fundamentals: [
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
  ],
  advanced: [
    {
      id: 'closures',
      title: 'Closures',
      icon: 'fa-lock',
      content: `
        <p>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.</p>
      `,
      code: `
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
      `
    },
    {
      id: 'prototypes',
      title: 'Prototypal Inheritance',
      icon: 'fa-sitemap',
       content: `
        <p>JavaScript is a prototype-based language. When we call a method or property on an object, JavaScript first checks if the object has it. If not, it looks at the object's prototype. This continues up the "prototype chain" until the property is found or the chain ends.</p>
      `,
      code: `
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log('Woof!');
};

const myDog = new Dog('Rex');
      `
    }
  ]
};
