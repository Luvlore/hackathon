import 'reflect-metadata';
import express from 'express';
import AppDataSource from "./database/dataSource"
import * as dotenv from 'dotenv';
import { routes } from './routes/index.routes';
dotenv.config();

const app = express();

app.use(express.json());

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
});

app.use(routes);

app.listen(3000, () => console.log('Server is running'));
