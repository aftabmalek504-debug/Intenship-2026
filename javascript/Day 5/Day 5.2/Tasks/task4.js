// Task 4: Sort prices both ways without changing the original array.

const prices = [500, 100, 900, 300];

const ascending = [...prices].sort((a, b) => a - b);
const descending = [...prices].sort((a, b) => b - a);

console.log("Ascending:", ascending);
console.log("Descending:", descending);
console.log("Original:", prices);
