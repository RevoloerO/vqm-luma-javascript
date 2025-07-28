/**
 * @file Contains the data for Part III: JavaScript in Action.
 */
export const part3Data = {
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
    },
    {
      id: 'event-handling',
      title: '3.3 Event Handling',
      icon: 'fa-hand-pointer',
      content: `
        <h4>Core Concept: Responding to User Actions</h4>
        <p>True interactivity comes from responding to user actions. In JavaScript, these actions—such as a mouse click or a key press—are known as <strong>events</strong>.</p>
        
        <h5>1. LISTENING FOR EVENTS</h5>
        <p><strong>Keyword:</strong> <code>addEventListener</code></p>
        <p>The standard way to handle events. This method is attached to a DOM element and "listens" for a specific event. When the event occurs, it executes a function.</p>
        <p><strong>Example:</strong></p>
        <pre><code>let myButton = document.querySelector('#myButton');\n\nmyButton.addEventListener('click', function() {\n  alert('Button was clicked!');\n});</code></pre>
        <hr>

        <h5>2. THE EVENT HANDLER</h5>
        <p><strong>Keyword:</strong> <code>Callback Function</code></p>
        <p>The function that runs when an event is detected. This function automatically receives an <strong>event object</strong> with details about the user's interaction.</p>
        <p><strong>Example:</strong></p>
        <pre><code>// 'event' is the event object\nmyButton.addEventListener('click', function(event) {\n  console.log(event.target); // Logs the button element itself\n});</code></pre>
        <hr>

        <h5>3. COMMON EVENT TYPES</h5>
        <p><strong>Keyword:</strong> <code>Event Types</code></p>
        <p>Different user actions have different event types that you can listen for.</p>
        <ul>
          <li><strong>Mouse Events:</strong> <code>click</code>, <code>mouseover</code>, <code>mouseout</code></li>
          <li><strong>Keyboard Events:</strong> <code>keydown</code>, <code>keyup</code></li>
          <li><strong>Form Events:</strong> <code>submit</code>, <code>change</code></li>
        </ul>
      `,
      code: null,
      mindMap: {
        center: 'Event Handling',
        nodes: [
          { title: 'The Trigger', keyword: 'Event', description: 'A user action, like a click or key press.' },
          { title: 'The Listener', keyword: 'addEventListener', description: 'A method that waits for a specific event on an element.' },
          { title: 'The Response', keyword: 'Callback Function', description: 'The function that executes when the event occurs.' },
        ]
      }
    },
    {
      id: 'part-3-summary',
      title: 'Part III Summary',
      icon: 'fa-table',
      content: `
        <h5>Consolidated Reference Guide for Part III</h5>
        <p>This table summarizes how JavaScript interacts with a web page.</p>
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
              <td><strong>DOM</strong></td>
              <td><code>document</code></td>
              <td>The live, scriptable blueprint of a webpage.</td>
            </tr>
            <tr>
              <td><strong>Selectors</strong></td>
              <td><code>querySelector</code></td>
              <td>Methods for finding and selecting HTML elements.</td>
            </tr>
            <tr>
              <td><strong>Properties</strong></td>
              <td><code>.textContent</code>, <code>.style</code></td>
              <td>Used to change the content and style of elements.</td>
            </tr>
            <tr>
              <td><strong>Event</strong></td>
              <td><code>'click'</code>, <code>'mouseover'</code></td>
              <td>A user action that JavaScript can respond to.</td>
            </tr>
            <tr>
              <td><strong>Event Listener</strong></td>
              <td><code>addEventListener</code></td>
              <td>A method that waits for a specific event to occur.</td>
            </tr>
          </tbody>
        </table>
      `,
      code: null,
      mindMap: null
    }
  ]
};
