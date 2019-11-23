# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript library used to create UI components with DRY/reusable code. It provides reusability of comonents to help with scalability. React uses JSX (a templating language that looks just like HTML and vanilla javascript), making it easy to read and write. React uses the virtual DOM.

2. What does it mean to think in react?

Thinking in React means thinking about what components you need and then writing them to be reusable.

3. Describe state.

State is a changeable condition, you have a starting state (example: 0, or "true") and then you have the next step where you declare the next state (like state +1 or false if it's this condtion, true if another condition).

4. Describe props.

Props are properties of your objects that you can pass in.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything that effects something outside the scope of the function, like getting data from an API, manipulating the DOM, etc. Side effects can cause a component to return a different output for the same state and props. Use useEffect() hook for cleanup if it's needed.