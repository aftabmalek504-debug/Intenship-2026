const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const statusMessage = document.querySelector("#status");
const STORAGE_KEY = "day5-task-manager";

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    statusMessage.textContent = "Saved data could not be read. Starting with an empty list.";
    return [];
  }
}

let tasks = loadTasks();

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    statusMessage.textContent = "Tasks saved.";
  } catch (error) {
    statusMessage.textContent = "Could not save tasks in this browser.";
  }
}

function renderTasks() {
  taskList.replaceChildren();
  if (tasks.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.textContent = "No tasks yet. Add one above.";
    taskList.append(emptyMessage);
    return;
  }

  for (const task of tasks) {
    const item = document.createElement("li");
    item.className = "task-item";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark ${task.title} as completed`);
    checkbox.addEventListener("change", () => {
      tasks = tasks.map(current => current.id === task.id ? { ...current, completed: checkbox.checked } : current);
      saveTasks();
      renderTasks();
    });

    const title = document.createElement("span");
    title.className = task.completed ? "task-title completed" : "task-title";
    title.textContent = task.title;
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${task.title}`);
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter(current => current.id !== task.id);
      saveTasks();
      renderTasks();
    });
    item.append(checkbox, title, deleteButton);
    taskList.append(item);
  }
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) {
    statusMessage.textContent = "Please enter a task.";
    return;
  }
  tasks.push({ id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, title, completed: false });
  saveTasks();
  input.value = "";
  input.focus();
  renderTasks();
});

renderTasks();
