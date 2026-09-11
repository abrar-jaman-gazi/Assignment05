# Dev Stack

A responsive React website for exploring modern development technologies and creating a personalized technology stack.

## Technologies Used

- React.js
- Vite
- JavaScript ES6+
- CSS
- React Icons
- React Toastify
- JSON

## Features

1. Responsive desktop, tablet and mobile navigation.
2. Technology cards loaded from a local JSON file.
3. Add, remove and remove-all stack functionality with toast notifications.

## Run Locally

```bash
npm install
npm run dev
```

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to describe what the UI should look like.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child. State is data managed inside a component that can change over time.

### 3. What does useState do, and where did you use it?

`useState` stores changing data in a React component. This project uses it for technologies, selected stack items, loading status and the mobile menu.

### 4. What does useEffect do, and why did you need it?

`useEffect` runs side effects after rendering. It is used here to fetch the technology JSON data when the application loads.

### 5. Why does every map item need a unique key?

React uses the key to identify each item when a list changes. A unique key helps React update the correct item efficiently.

### 6. What is conditional rendering?

Conditional rendering means showing different UI depending on a condition. For example, the stack shows an empty message when `stack.length === 0`.

### 7. How do parent and child components communicate?

A parent sends data or functions to a child through props. The child can call a function received through props to send an action back to the parent.
