const taskElement = document.getElementById("task");
const timerElement = document.getElementById("timer");

function updateTaskAndTimer() {
  const tasks = [
    "Spend 5 minutes in meditation.",
    "Take a short walk outside.",
    "Write down a list of things you're grateful for today.",
    "Read a chapter from a book you enjoy.",
    "Practice deep breathing for 10 minutes.",
  ];
  
  const currentTask = tasks[Math.floor(Math.random() * tasks.length)];
  taskElement.textContent = `Task: ${currentTask}`;

  const timeUntilMidnight = new Date();
  timeUntilMidnight.setHours(24, 0, 0, 0);
  const timeDifference = timeUntilMidnight - new Date();
  const hours = Math.floor(timeDifference / (60 * 60 * 1000));
  const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
  timerElement.textContent = `Time until next task: ${hours}h ${minutes}m ${seconds}s`;
}

updateTaskAndTimer();
setInterval(updateTaskAndTimer, 1000);
