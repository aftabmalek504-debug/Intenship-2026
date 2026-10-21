// Task 5: Handle missing or invalid JSON in browser storage.

function readSavedTasks() {
  try {
    const saved = localStorage.getItem("savedTasks");
    if (saved === null) return [];
    const tasks = JSON.parse(saved);
    return Array.isArray(tasks) ? tasks : [];
  } catch (error) {
    console.error("Saved tasks are invalid; starting with an empty list.");
    return [];
  }
}

console.log(readSavedTasks());
