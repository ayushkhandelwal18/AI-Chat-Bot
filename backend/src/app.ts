import express from 'express';
import {config} from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.route.js'; // Importing the router
import cookieParser from 'cookie-parser';
config(); // Load environment variables from .env file

const app = express();

// Middleware 
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production only use in development
app.use(morgan("dev")); // Logging middleware


app.use("/api/v1",appRouter);


export default app;
