// Task 3: Return only active users' names and emails.

const users = [
  { name: "Asha", email: "asha@example.com", active: true },
  { name: "Ravi", email: "ravi@example.com", active: false },
  { name: "Neha", email: "neha@example.com", active: true }
];

const activeUsers = users
  .filter(user => user.active)
  .map(({ name, email }) => ({ name, email }));

console.log(activeUsers);
