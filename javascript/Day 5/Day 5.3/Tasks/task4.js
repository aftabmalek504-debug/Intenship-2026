// Task 4: Persistent task-list logic. Run in a browser console.

function loadTasks() {
  try {
    const savedTasks = localStorage.getItem("internshipTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error("Could not load tasks:", error.message);
    return [];
  }
}

function saveTasks(tasks) {
  localStorage.setItem("internshipTasks", JSON.stringify(tasks));
}

function addTask(tasks, title) {
  const cleanTitle = title.trim();
  if (!cleanTitle) return tasks;
  const updatedTasks = [
    ...tasks,
    { id: Date.now(), title: cleanTitle, completed: false }
  ];
  saveTasks(updatedTasks);
  return updatedTasks;
}

function completeTask(tasks, id) {
  const updatedTasks = tasks.map(task =>
    task.id === id ? { ...task, completed: true } : task
  );
  saveTasks(updatedTasks);
  return updatedTasks;
}

function deleteTask(tasks, id) {
  const updatedTasks = tasks.filter(task => task.id !== id);
  saveTasks(updatedTasks);
  return updatedTasks;
}

let tasks = loadTasks();
tasks = addTask(tasks, "Practice JavaScript");
console.log(tasks);
