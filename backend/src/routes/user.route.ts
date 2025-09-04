import {Router } from "express";
import { getAllUsers, userlogin, usersignup, verifyUser ,userlogout } from "../controllers/user.controller";
import {loginValidator, signupValidator,validate } from "../utils/validators";
import { verifyToken } from "../utils/token-manager";
const userRoutes = Router();


userRoutes.get("/",getAllUsers); // Route to get all users
userRoutes.post("/signup", validate(signupValidator),usersignup);
userRoutes.post("/login", validate(loginValidator),userlogin);
userRoutes.get("/auth-status", verifyToken,verifyUser);
userRoutes.get("/logout" ,verifyToken,userlogout);



export default userRoutes;
