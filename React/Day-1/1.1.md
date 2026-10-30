```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>JavaScript Example</title>
</head>
<body>
  <p id="message">Task is pending.</p>

  <button id="completeButton">
    Complete Task
  </button>

  <script>
    const button = document.querySelector("#completeButton");
    const message = document.querySelector("#message");

    button.addEventListener("click", () => {
      message.textContent = "Task completed!";
    });
  </script>
</body>
</html>
```

```jsx
import { useState } from "react";

function TaskStatus() {
  const [completed, setCompleted] = useState(false);

  return (
    <section>
      <p>
        {completed ? "Task completed!" : "Task is pending."}
      </p>

      <button
        type="button"
        onClick={() => setCompleted(true)}
      >
        Complete Task
      </button>
    </section>
  );
}

export default TaskStatus;
```

```jsx
function WelcomeMessage() {
  return <h1>Welcome to React!</h1>;
}

export default WelcomeMessage;
```

```jsx
import WelcomeMessage from "./WelcomeMessage.jsx";

function App() {
  return (
    <main>
      <WelcomeMessage />
      <p>Start learning React today.</p>
    </main>
  );
}

export default App;
```

```bash
npm install
```

```bash
node --version
```

```bash
npm --version
```

```bash
cd Desktop
```

```bash
npm create vite@latest task-manager -- --template react
```

```bash
cd task-manager
```

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run dev
```

```jsx
function App() {
  return (
    <main>
      <h1>My React Application</h1>
      <p>Welcome to the internship.</p>
    </main>
  );
}

export default App;
```

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Task Manager</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

```json
{
  "name": "task-manager",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "...",
    "react-dom": "..."
  },
  "devDependencies": {
    "vite": "..."
  }
}
```

```jsx
function App() {
  return (
    <main>
      <h1>My First React App</h1>

      <p>I am learning React with Vite.</p>

      <button type="button">
        Start Learning
      </button>
    </main>
  );
}

export default App;
```

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 32px;
  font-family: Arial, sans-serif;
  background: #f4f6f8;
  color: #17202a;
}

main {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px;
  background: white;
  border-radius: 12px;
}

h1 {
  margin-top: 0;
}

button {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
```

```jsx
<h1>My First React App</h1>
```

```jsx
<h1>My Internship Dashboard</h1>
```

```bash
npm install
```

```bash
npm run dev
```

```jsx
function Header() {
  return (
    <header>
      <h1>MERN Stack Internship</h1>
      <p>Frontend Learning Dashboard</p>
    </header>
  );
}

function WelcomeSection() {
  return (
    <section>
      <h2>Welcome, Student!</h2>
      <p>Your React learning journey starts here.</p>
    </section>
  );
}

function LearningSection() {
  return (
    <section>
      <h2>Today's Learning Goals</h2>

      <ul>
        <li>Understand React</li>
        <li>Set up a Vite project</li>
        <li>Explore the project structure</li>
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>Week 2 — React Fundamentals</p>
    </footer>
  );
}

function App() {
  return (
    <main className="dashboard">
      <Header />
      <WelcomeSection />
      <LearningSection />
      <Footer />
    </main>
  );
}

export default App;
```

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 24px;
  font-family: Arial, sans-serif;
  background: #f3f5f7;
  color: #202124;
}

.dashboard {
  max-width: 800px;
  margin: 0 auto;
}

header,
section,
footer {
  margin-bottom: 16px;
  padding: 20px;
  border-radius: 10px;
  background: white;
}

header {
  background: #202124;
  color: white;
}

footer {
  text-align: center;
  color: #555;
}

@media (max-width: 600px) {
  body {
    padding: 12px;
  }

  header,
  section,
  footer {
    padding: 16px;
  }
}
```