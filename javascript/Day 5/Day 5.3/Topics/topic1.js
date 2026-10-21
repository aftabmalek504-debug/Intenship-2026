// Browser storage examples. Run these in a browser, not plain Node.js.

localStorage.setItem("username", "Aftab");
console.log(localStorage.getItem("username"));

const preferences = { theme: "dark", language: "en" };
localStorage.setItem("preferences", JSON.stringify(preferences));
const savedPreferences = JSON.parse(localStorage.getItem("preferences") ?? "{}");
console.log(savedPreferences.theme);

sessionStorage.setItem("currentStep", "2");
console.log(sessionStorage.getItem("currentStep"));

// Never store passwords or secret API keys in browser storage.
