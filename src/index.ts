import express from 'express';
import { getCurrentTask } from './taskUtils';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const currentTask = getCurrentTask();
  res.send(`Task of the day: ${currentTask}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
