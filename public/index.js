import { tasks } from "../src/tasks";

document.addEventListener("DOMContentLoaded", function () {
  const taskElement = document.getElementById("task");
  const timerElement = document.getElementById("timer");

  function getCurrentTask() {
    const today = new Date();
    const taskIndex = today.getDate() % tasks.length;
    return tasks[taskIndex];
  }

  function updateTaskAndTimer() {
    const currentTask = getCurrentTask();
    taskElement.textContent = `Task: ${currentTask}`;
  }

  updateTaskAndTimer();
  setInterval(updateTaskAndTimer, 1000);
});
