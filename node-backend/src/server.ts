import 'reflect-metadata';

import express from 'express';
import router from './routes/index';

import './database';

const port = 3333;

const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server Started port ${port}`);
});
