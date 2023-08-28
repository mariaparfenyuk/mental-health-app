document.addEventListener("DOMContentLoaded", function () {
  const taskElement = document.getElementById("task");
  const timerElement = document.getElementById("timer");

  function updateTaskAndTimer() {
    const currentTask = getCurrentTask();
    taskElement.textContent = currentTask;
  }

  updateTaskAndTimer();
  setInterval(updateTaskAndTimer, 1000);
});
