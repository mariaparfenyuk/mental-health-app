import express from 'express';
import { getCurrentTask } from './taskUtils';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const currentTask = getCurrentTask();
  res.send(`Task of the day: ${currentTask}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
