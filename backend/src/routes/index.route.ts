import {Router } from 'express';
import userRoutes from './user.route';
import chatRoutes from './chat.route';

const appRouter = Router();

appRouter.use("/user",userRoutes); //api/v1/user
appRouter.use("/chat",chatRoutes) //api/v1/chat

export default appRouter;