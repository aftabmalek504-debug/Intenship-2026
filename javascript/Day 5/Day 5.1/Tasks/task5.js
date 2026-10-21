// Task 5: Build a profile message while handling missing fields.

function formatProfile(user = {}) {
  const name = user.name ?? "Unknown user";
  const city = user.address?.city ?? "Unknown city";
  return `${name} lives in ${city}.`;
}

console.log(formatProfile({
  name: "Aftab",
  address: { city: "Vadodara" }
}));
console.log(formatProfile({}));
