// Template literals, optional chaining, and nullish coalescing

const user = {
  name: "Aftab",
  contact: {
    phone: "9876543210"
  }
};

console.log(`Hello, ${user.name}!`);
console.log(user.contact?.phone ?? "Phone not available");
console.log(user.address?.city ?? "Unknown city");

const quantity = 0;
console.log(quantity ?? 1); // 0: zero is a valid value
console.log(quantity || 1); // 1: || treats zero as falsy
