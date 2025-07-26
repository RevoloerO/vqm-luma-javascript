/**
 * @file Contains the data for the "Advanced" section.
 */
export const advancedData = [
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
];
