// Task 4: Welcome message with default parameters.

function welcomeUser(username = "Guest", courseName = "JavaScript") {
  return `Welcome ${username}! You are learning ${courseName}.`;
}

console.log(welcomeUser());
console.log(welcomeUser("Aftab", "Full Stack Development"));
console.log(welcomeUser(undefined, "React"));
