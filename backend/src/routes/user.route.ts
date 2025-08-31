import {Router } from "express";
import { getAllUsers, userlogin, usersignup } from "../controllers/user.controller";
import {loginValidator, signupValidator,validate } from "../utils/validators";
const userRoutes = Router();


userRoutes.get("/",getAllUsers); // Route to get all users
userRoutes.post("/signup", validate(signupValidator),usersignup);

userRoutes.post("/login", validate(loginValidator),userlogin);




export default userRoutes;
