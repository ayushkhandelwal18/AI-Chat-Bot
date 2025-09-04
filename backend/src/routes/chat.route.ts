import {Router } from "express";
import { verifyToken } from "../utils/token-manager";
import { chatCompleteValidator, validate } from "../utils/validators";
import { generateChatCompletion, sendALLChatstoUSer,deleteUserChats } from "../controllers/chat-controller";


const chatRoutes = Router();

chatRoutes.post("/new" ,
    validate(chatCompleteValidator) ,
    verifyToken,
    generateChatCompletion);


    chatRoutes.get("/all-chats",
    verifyToken,
    sendALLChatstoUSer
    )

    chatRoutes.delete("/delete",
    verifyToken,
    deleteUserChats
    )

export default chatRoutes;