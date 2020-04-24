import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import router from './routes/index';
import uploadConfig from './config/upload';
import AppError from './errors/AppErros';

import './database';

const port = 3333;

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(router);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(port, () => {
  console.log(`Server Started port ${port}`);
});
