// Task 2: Store and retrieve user preferences. Run in a browser.

const preferences = {
  theme: "dark",
  language: "English"
};

localStorage.setItem("userPreferences", JSON.stringify(preferences));

const savedPreferences = JSON.parse(
  localStorage.getItem("userPreferences") ?? "{}"
);

console.log("Theme:", savedPreferences.theme);
console.log("Language:", savedPreferences.language);
