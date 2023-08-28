import { tasks } from './tasks';

export function getCurrentTask(): string {
  const today = new Date();
  const taskIndex = today.getDate() % tasks.length;
  return tasks[taskIndex];
}
