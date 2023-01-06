import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import ImagesRouter from "./routers/imageRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) throw Error("No database url was present.")

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use("/image", ImagesRouter);

mongoose.connect(databaseUrl)
  .then((result) => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
  })

