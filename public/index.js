const taskElement = document.getElementById("task");
const timerElement = document.getElementById("timer");

const tasks = [
  "Spend 5 minutes in meditation.",
  "Take a short walk outside.",
  "Write down a list of things you're grateful for today.",
  "Read a chapter from a book you enjoy.",
  "Practice deep breathing for 10 minutes.",
];

let currentTaskIndex = Math.floor(Math.random() * tasks.length);

function updateTask() {
  currentTaskIndex = (currentTaskIndex + 1) % tasks.length;
  taskElement.textContent = `Task: ${tasks[currentTaskIndex]}`;
}

function getTimeUntilMidnightGMT() {
  const now = new Date();
  const utcNow = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0);
  const midnightGMT = new Date(utcNow.getTime() + 24 * 60 * 60 * 1000);
  
  return midnightGMT.getTime() - now.getTime();
}

function updateTimer() {
  const timeDifference = getTimeUntilMidnightGMT();
  const hours = Math.floor(timeDifference / (60 * 60 * 1000));
  const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
  
  timerElement.textContent = `Time until midnight GMT: ${hours}h ${minutes}m ${seconds}s`;
}

function updateTaskAndTimer() {
  updateTask();
  updateTimer();
}

updateTaskAndTimer();
setInterval(updateTimer, 1000);
