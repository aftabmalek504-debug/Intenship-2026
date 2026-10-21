// Task 1: Save and read a username. Run in a browser.

localStorage.setItem("username", "Aftab");
const username = localStorage.getItem("username");
console.log("Saved username:", username);
