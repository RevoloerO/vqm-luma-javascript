/**
 * @file Contains the data for Part V: The Modern JavaScript Ecosystem.
 */
export const part5Data = {
  id: 'part-5',
  title: 'Part V: The Modern Ecosystem',
  icon: 'fa-project-diagram',
  subTopics: [
    {
      id: 'ecosystem-overview',
      title: '5.1 Landscape Overview',
      icon: 'fa-map',
      content: `
        <h4>Core Concept: The Modern JavaScript Ecosystem</h4>
        <p>Core JavaScript provides the language, but modern web development is dominated by an ecosystem of tools that provide structure, efficiency, and advanced capabilities.</p>
        
        <h5>1. KEY TERMINOLOGY</h5>
        <ul>
            <li><strong>Library vs. Framework:</strong> The key difference is "inversion of control." With a <strong>library</strong>, you are in control and call its code when you need it. With a <strong>framework</strong>, it is in control and calls your code at the appropriate times.</li>
            <li><strong>Runtime Environment:</strong> This is the environment where JavaScript code is executed. For the front-end, this is the browser. For the back-end, it's a dedicated runtime like Node.js.</li>
        </ul>
        <hr>
        <h5>Technology Landscape</h5>
        <p>This table offers a high-level map of the most important technologies in the modern JavaScript landscape.</p>
        <table class="analogy-table">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Type</th>
              <th>Core Philosophy</th>
              <th>Primary Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>React</strong></td>
              <td>Library</td>
              <td>Declarative, Component-Based UI, Virtual DOM</td>
              <td>Building interactive UIs for Single-Page Applications (SPAs).</td>
            </tr>
            <tr>
              <td><strong>Angular</strong></td>
              <td>Framework</td>
              <td>Full-featured, Opinionated MVC/MVVM</td>
              <td>Building large-scale, enterprise-level SPAs.</td>
            </tr>
            <tr>
              <td><strong>Vue.js</strong></td>
              <td>Framework</td>
              <td>Progressive, Approachable, Performant</td>
              <td>Versatile, from enhancing existing pages to full SPAs.</td>
            </tr>
            <tr>
              <td><strong>Node.js</strong></td>
              <td>Runtime Env.</td>
              <td>Asynchronous, Event-Driven, Non-Blocking I/O</td>
              <td>Building fast, scalable server-side applications and APIs.</td>
            </tr>
            <tr>
              <td><strong>jQuery</strong></td>
              <td>Library</td>
              <td>"Write Less, Do More"</td>
              <td>Simplifying DOM manipulation, events, and AJAX (legacy).</td>
            </tr>
            <tr>
              <td><strong>Express.js</strong></td>
              <td>Framework</td>
              <td>Minimalist, Unopinionated (for Node.js)</td>
              <td>Creating web servers and APIs with Node.js.</td>
            </tr>
          </tbody>
        </table>
      `,
      code: null,
      mindMap: null
    },
    {
        id: 'react-library',
        title: '5.2 React: The UI Library',
        icon: 'fab fa-react',
        content: `
            <h4>Core Concept: Component-Driven User Interfaces</h4>
            <p>Developed by Meta (Facebook), React is the most popular JavaScript library for building user interfaces. It focuses on the "view" layer of an application.</p>
            
            <h5>1. DECLARATIVE UI</h5>
            <p><strong>Keyword:</strong> <code>Declarative</code></p>
            <p>You describe what the UI should look like for a given state, and React handles the complex DOM updates efficiently.</p>
            <p><strong>Example:</strong> Instead of manually writing steps to change text, you just change the state variable, and the UI automatically updates.</p>
            <hr>

            <h5>2. REUSABLE PIECES</h5>
            <p><strong>Keyword:</strong> <code>Components</code></p>
            <p>UIs are built from isolated, reusable pieces of code called components. Each component manages its own state and can be composed to build complex interfaces.</p>
            <p><strong>Example:</strong> A single <code>&lt;Button /&gt;</code> component can be reused throughout an application with different labels and functions.</p>
            <hr>

            <h5>3. HTML IN JAVASCRIPT</h5>
            <p><strong>Keyword:</strong> <code>JSX</code></p>
            <p>A syntax extension that allows you to write HTML-like markup directly within your JavaScript code, making component creation intuitive.</p>
            <p><strong>Example:</strong></p>
            <pre><code>const myElement = &lt;h1&gt;Hello, React!&lt;/h1&gt;;</code></pre>
        `,
        code: null,
        mindMap: {
            center: 'React',
            nodes: [
              { title: 'The Philosophy', keyword: 'Declarative UI', description: 'Describe the final UI, React will handle the rest.' },
              { title: 'The Building Blocks', keyword: 'Components', description: 'Create reusable, isolated pieces of UI.' },
              { title: 'The Syntax', keyword: 'JSX', description: 'Write HTML-like code directly in your JavaScript.' },
              { title: 'The Performance', keyword: 'Virtual DOM', description: 'An in-memory copy of the DOM for efficient updates.' },
            ]
        }
    },
    {
        id: 'nodejs-runtime',
        title: '5.3 Node.js: JS on the Server',
        icon: 'fab fa-node-js',
        content: `
            <h4>Core Concept: JavaScript Outside the Browser</h4>
            <p>Node.js is a runtime environment that allows JavaScript to be executed on a server. It enables the "JavaScript everywhere" paradigm, using one language for both client and server.</p>
            
            <h5>1. THE ARCHITECTURE</h5>
            <p><strong>Keyword:</strong> <code>Event-Driven</code></p>
            <p>Node.js uses a non-blocking, single-threaded event loop. This makes it exceptionally efficient at handling many concurrent connections, perfect for I/O-intensive tasks like APIs and web servers.</p>
            <p><strong>Example:</strong> A Node.js server can handle thousands of simultaneous requests to read from a database without getting blocked waiting for each one to finish.</p>
            <hr>

            <h5>2. THE ECOSYSTEM</h5>
            <p><strong>Keyword:</strong> <code>Modules (npm)</code></p>
            <p>Node.js has a rich ecosystem of third-party modules, managed by the Node Package Manager (npm). These modules provide functionality for almost any task.</p>
            <p><strong>Example:</strong> To create a web server, you would typically use the popular <code>Express.js</code> module, installed via npm.</p>
        `,
        code: null,
        mindMap: {
            center: 'Node.js',
            nodes: [
              { title: 'The Engine', keyword: 'V8 Engine', description: 'Allows JavaScript to run outside of a browser environment.' },
              { title: 'The Model', keyword: 'Event-Driven', description: 'Uses a non-blocking event loop for high efficiency.' },
              { title: 'The Ecosystem', keyword: 'npm', description: 'The largest software registry for reusable code packages (modules).' },
            ]
        }
    },
    {
        id: 'other-players',
        title: '5.4 Other Major Players',
        icon: 'fa-users',
        content: `
            <h4>Core Concept: A Comparative Analysis</h4>
            <p>While React and Node.js are dominant, other powerful tools play a crucial role in the ecosystem.</p>
            
            <div class="two-column-layout">
                <div class="column">
                    <h5>1. ANGULAR</h5>
                    <p><strong>Keyword:</strong> <code>Framework</code></p>
                    <p>Maintained by Google, Angular is a comprehensive, "batteries-included" web framework. It provides a complete, opinionated solution for building large-scale, enterprise-level applications.</p>
                </div>
                <div class="column">
                    <h5>2. VUE.JS</h5>
                    <p><strong>Keyword:</strong> <code>Progressive Framework</code></p>
                    <p>Known for its approachability and high performance. It's designed to be incrementally adoptable, meaning it can be used for a small part of a page or a full-scale application.</p>
                </div>
            </div>
            <hr>
            <div class="two-column-layout">
                <div class="column">
                    <h5>3. JQUERY</h5>
                    <p><strong>Keyword:</strong> <code>Legacy Library</code></p>
                    <p>Historically important, jQuery simplified cross-browser DOM manipulation and AJAX. While still found on many websites, its direct manipulation approach has been largely superseded by modern libraries.</p>
                </div>
                <div class="column">
                    <h5>4. EXPRESS.JS</h5>
                    <p><strong>Keyword:</strong> <code>Server Framework</code></p>
                    <p>The de facto standard server framework for Node.js. It is a minimal and flexible framework for building web servers and APIs.</p>
                </div>
            </div>
        `,
        code: null,
        mindMap: null
    },
    {
      id: 'part-5-summary',
      title: 'Part V Summary',
      icon: 'fa-table',
      content: `
        <h5>Consolidated Reference Guide for Part V</h5>
        <p>This table summarizes the major players in the modern JavaScript ecosystem.</p>
        <table class="analogy-table">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Type</th>
              <th>Primary Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>React</strong></td>
              <td>Library</td>
              <td>Building component-based user interfaces for SPAs.</td>
            </tr>
            <tr>
              <td><strong>Node.js</strong></td>
              <td>Runtime</td>
              <td>Running JavaScript on the server for back-end applications.</td>
            </tr>
            <tr>
              <td><strong>Angular</strong></td>
              <td>Framework</td>
              <td>Building large-scale, enterprise-level applications.</td>
            </tr>
            <tr>
              <td><strong>Vue.js</strong></td>
              <td>Framework</td>
              <td>A progressive framework, adaptable for projects of any size.</td>
            </tr>
            <tr>
              <td><strong>Express.js</strong></td>
              <td>Framework</td>
              <td>The standard for creating web servers and APIs with Node.js.</td>
            </tr>
          </tbody>
        </table>
      `,
      code: null,
      mindMap: null
    }
  ]
};
