```jsx
import { createElement } from "react";

function App() {
  return createElement(
    "h1",
    null,
    "Hello, React!"
  );
}

export default App;
```

```jsx
function App() {
  return <h1>Hello, React!</h1>;
}

export default App;
```

```jsx
function ProductCard() {
  return (
    <article>
      <img
        src="https://placehold.co/200x150"
        alt="Sample product"
      />
      <h2>Wireless Headphones</h2>
      <p>Price: ₹1,499</p>
      <button type="button">Add to Cart</button>
    </article>
  );
}

export default ProductCard;
```

```jsx
function App() {
  return (
    <h1>Welcome</h1>
    <p>Learn React today.</p>
  );
}

export default App;
```

```jsx
function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Learn React today.</p>
    </div>
  );
}

export default App;
```

```jsx
function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Learn React today.</p>
    </div>
  );
}
```

```jsx
function App() {
  return (
    <>
      <h1>Welcome</h1>
      <p>Learn React today.</p>
    </>
  );
}

export default App;
```

```jsx
function App() {
  return (
    <div>
      <h1>React Training</h1>
      <img src="/logo.png">
      <input type="text">
    </div>
  );
}
```

```jsx
function App() {
  return (
    <div>
      <h1>React Training</h1>
      <img src="/logo.png" alt="Logo" />
      <input type="text" />
    </div>
  );
}
```

```html
<div class="card">Hello</div>
```

```jsx
<div className="card">Hello</div>
```

```html
<label for="email">Email</label>
```

```jsx
<label htmlFor="email">Email</label>
```

```jsx
function App() {
  const studentName = "Rahil";
  const course = "MERN Stack Internship";

  return (
    <main>
      <h1>Welcome, {studentName}!</h1>
      <p>Course: {course}</p>
    </main>
  );
}

export default App;
```

```jsx
function App() {
  const price = 500;
  const quantity = 3;
  const total = price * quantity;

  return (
    <main>
      <p>Price: ₹{price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: ₹{total}</p>
    </main>
  );
}

export default App;
```

```jsx
function App() {
  const firstName = "Rahil";
  const lastName = "Vahora";
  const marks = 85;

  return (
    <main>
      <h1>{firstName + " " + lastName}</h1>

      <p>Marks: {marks}</p>

      <p>Next score target: {marks + 10}</p>

      <p>Passed: {marks >= 40 ? "Yes" : "No"}</p>
    </main>
  );
}

export default App;
```

```jsx
<p>{10 + 20}</p>

<p>{userName}</p>

<p>{items.length}</p>

<p>{isActive ? "Active" : "Inactive"}</p>
```

```js
10 + 20
studentName
marks >= 40
isLoggedIn ? "Welcome" : "Login"
```

```js
const total = 100;

if (total > 50) {
  console.log("Large total");
}
```

```jsx
return (
  <p>
    {if (isLoggedIn) "Welcome"}
  </p>
);
```

```jsx
return (
  <p>
    {isLoggedIn ? "Welcome" : "Please log in"}
  </p>
);
```

```jsx
function App() {
  return (
    <img
      src="/profile.png"
      alt="Student profile"
    />
  );
}
```

```jsx
function App() {
  const imageUrl = "/profile.png";
  const imageDescription = "Student profile";

  return (
    <img
      src={imageUrl}
      alt={imageDescription}
    />
  );
}

export default App;
```

```jsx
function App() {
  const status = "success";

  return (
    <div className={status === "success" ? "success" : "error"}>
      Operation completed.
    </div>
  );
}

export default App;
```

```css
.success {
  color: green;
}

.error {
  color: red;
}
```

```jsx
condition ? valueIfTrue : valueIfFalse
```

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <main>
      <h1>
        {isLoggedIn ? "Welcome Back!" : "Please Log In"}
      </h1>
    </main>
  );
}

export default App;
```

```jsx
function TaskStatus() {
  const completed = true;

  return (
    <div>
      <h2>Learn JSX</h2>

      <p>
        Status: {completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
}

export default TaskStatus;
```

```jsx
function App() {
  const hasNotifications = true;

  return (
    <main>
      <h1>Dashboard</h1>

      {hasNotifications && (
        <p>You have new notifications.</p>
      )}
    </main>
  );
}

export default App;
```

```jsx
{items.length && <p>Items available</p>}
```

```jsx
{items.length > 0 && <p>Items available</p>}
```

```jsx
function Result() {
  const marks = 75;

  let message;

  if (marks >= 80) {
    message = "Excellent";
  } else if (marks >= 60) {
    message = "Good";
  } else if (marks >= 40) {
    message = "Passed";
  } else {
    message = "Needs improvement";
  }

  return <h2>{message}</h2>;
}

export default Result;
```

```js
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);
```

```jsx
function App() {
  const topics = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];

  return (
    <main>
      <h1>Learning Topics</h1>

      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
```

```jsx
function App() {
  const students = [
    {
      id: 1,
      name: "Aarav",
      role: "Frontend Intern",
    },
    {
      id: 2,
      name: "Diya",
      role: "Full Stack Intern",
    },
    {
      id: 3,
      name: "Kabir",
      role: "Frontend Intern",
    },
  ];

  return (
    <main>
      <h1>Internship Students</h1>

      {students.map((student) => (
        <article key={student.id}>
          <h2>{student.name}</h2>
          <p>{student.role}</p>
        </article>
      ))}
    </main>
  );
}

export default App;
```

```jsx
<li key={task.id}>{task.title}</li>
```

```jsx
function App() {
  const tasks = [];

  return (
    <main>
      <h1>My Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks available. Add your first task!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
```

```bash
npm create vite@latest internship-dashboard -- --template react
cd internship-dashboard
npm install
npm run dev
```

```jsx
function App() {
  const studentName = "Aarav";

  const modules = [
    {
      id: 1,
      title: "React Setup",
      duration: "1 session",
      completed: true,
    },
    {
      id: 2,
      title: "JSX Fundamentals",
      duration: "1 session",
      completed: false,
    },
    {
      id: 3,
      title: "Components",
      duration: "1 session",
      completed: false,
    },
    {
      id: 4,
      title: "Props",
      duration: "1 session",
      completed: false,
    },
  ];

  const completedCount = modules.filter(
    (module) => module.completed
  ).length;

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>MERN Stack Internship</h1>
        <p>Learning Dashboard</p>
      </header>

      <section className="welcome-panel">
        <h2>Welcome, {studentName}!</h2>
        <p>
          You have completed {completedCount} out of{" "}
          {modules.length} modules.
        </p>
      </section>

      <section>
        <h2>Learning Modules</h2>

        {modules.length === 0 ? (
          <p>No modules available.</p>
        ) : (
          <div className="module-list">
            {modules.map((module) => (
              <article
                className="module-card"
                key={module.id}
              >
                <h3>{module.title}</h3>

                <p>Duration: {module.duration}</p>

                <p
                  className={
                    module.completed
                      ? "status-completed"
                      : "status-pending"
                  }
                >
                  {module.completed
                    ? "Completed"
                    : "Pending"}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="dashboard-footer">
        Keep learning and building!
      </footer>
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
  max-width: 900px;
  margin: 0 auto;
}

.dashboard-header,
.welcome-panel,
.module-card {
  padding: 20px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: white;
}

.dashboard-header {
  background: #202124;
  color: white;
}

.module-list {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(220px, 1fr)
  );
  gap: 16px;
}

.module-card {
  margin-bottom: 0;
  border: 1px solid #e0e0e0;
}

.status-completed {
  color: green;
  font-weight: bold;
}

.status-pending {
  color: #a15c00;
  font-weight: bold;
}

.dashboard-footer {
  margin-top: 24px;
  text-align: center;
  color: #555;
}

@media (max-width: 600px) {
  body {
    padding: 12px;
  }

  .dashboard-header,
  .welcome-panel,
  .module-card {
    padding: 16px;
  }
}
```

```jsx
const name = "Aarav";

return <h1>name</h1>;
```

```jsx
const name = "Aarav";

return <h1>{name}</h1>;
```

```jsx
<div class="card">Product</div>
```

```jsx
<div className="card">Product</div>
```

```jsx
{students.map((student) => (
  <p>{student.name}</p>
))}
```

```jsx
{students.map((student) => (
  <p key={student.id}>{student.name}</p>
))}
```

```jsx
<p>{if (active) "Active"}</p>
```

```jsx
<p>{active ? "Active" : "Inactive"}</p>
```

```jsx
<img src="/logo.png">
```

```jsx
<img src="/logo.png" alt="Logo" />
```

```jsx
{items.length && <p>Items found</p>}
```

```jsx
{items.length > 0 && <p>Items found</p>}
```

```jsx
const price = 100;

return <p>{price * 2}</p>;
```

```jsx
const isLoggedIn = false;

return <p>{isLoggedIn ? "Dashboard" : "Login"}</p>;
```

```jsx
function App() {
  const name = "Diya";
  const age = 22;

  return (
    <p>
      {name} is {age} years old.
    </p>
  );
}
```

```jsx
function App() {
  const quantity = 4;
  const price = 250;

  return <h2>Total: ₹{quantity * price}</h2>;
}
```

```jsx
function App() {
  const marks = 35;

  return (
    <p>
      {marks >= 40 ? "Passed" : "Failed"}
    </p>
  );
}
```

```jsx
function App() {
  const topics = ["JSX", "Props", "Components"];

  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic}>{topic}</li>
      ))}
    </ul>
  );
}
```

```jsx
function App() {
  const notifications = 0;

  return (
    <div>
      {notifications > 0 && <p>New notification</p>}
      <p>Welcome</p>
    </div>
  );
}
```

```jsx
function App() {
  return (
    <h1>Welcome</h1>
    <p>Start learning React.</p>
  );
}
```

```jsx
function App() {
  const studentName = "Aarav";

  return <h1>studentName</h1>;
}
```

```jsx
function App() {
  return <div class="student-card">Student</div>;
}
```

```jsx
function App() {
  const score = 70;

  return (
    <p>
      {if (score >= 40) "Passed"}
    </p>
  );
}
```

```jsx
function App() {
  const courses = ["HTML", "CSS", "React"];

  return (
    <ul>
      {courses.map((course) => (
        <li>{course}</li>
      ))}
    </ul>
  );
}
```

```jsx
function App() {
  const products = [];

  return (
    <div>
      {products.length && <p>Products available</p>}
    </div>
  );
}
```

```js
const courses = [
  {
    id: 1,
    title: "HTML Fundamentals",
    duration: "2 hours",
    completed: true,
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    duration: "3 hours",
    completed: true,
  },
  {
    id: 3,
    title: "JavaScript Basics",
    duration: "4 hours",
    completed: false,
  },
  {
    id: 4,
    title: "JSX",
    duration: "2 hours",
    completed: false,
  },
  {
    id: 5,
    title: "React Components",
    duration: "3 hours",
    completed: false,
  },
];
```

```jsx
function App() {
  return (
    <>
      <h1>Welcome</h1>
      <p>Start learning React.</p>
    </>
  );
}
```

```jsx
function App() {
  const studentName = "Aarav";

  return <h1>{studentName}</h1>;
}
```

```jsx
function App() {
  return <div className="student-card">Student</div>;
}
```

```jsx
function App() {
  const score = 70;

  return (
    <p>{score >= 40 ? "Passed" : "Failed"}</p>
  );
}
```

```jsx
function App() {
  const courses = ["HTML", "CSS", "React"];

  return (
    <ul>
      {courses.map((course) => (
        <li key={course}>{course}</li>
      ))}
    </ul>
  );
}
```

```jsx
function App() {
  const products = [];

  return (
    <div>
      {products.length > 0 ? (
        <p>Products available</p>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}
```