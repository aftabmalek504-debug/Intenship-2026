// Task 3: Store and read a temporary form step. Run in a browser.

sessionStorage.setItem("currentStep", "2");
const currentStep = sessionStorage.getItem("currentStep");

console.log("Current form step:", currentStep);
