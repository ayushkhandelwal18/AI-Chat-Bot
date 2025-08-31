import  User  from '../models/user.model.js';
import { Request, Response, NextFunction } from 'express';
import {hash,compare} from "bcrypt";
import { createToken } from '../utils/token-manager.js';
import { COOKIE_NAME } from '../utils/constant.js';



export const getAllUsers = async (
    req:Request,
    res:Response,
    next:NextFunction ) => {
 try{
    const users =await User.find();
    return res.status(200).json({
        status: "success",
        message: "Users fetched successfully",
        data: users});

 }catch(error){
    console.log(error);
    return res.status(200).json({message:"Error fetching users", error: error.message});    
 }
};

export const usersignup = async (
    req:Request,
    res:Response,
    next:NextFunction ) => {
 try{
    const{name,email,password}=req.body;

    const exixstinguser =await User.findOne({email});
    if(exixstinguser){
        return res.status(401).json({message:"User already exists"});
    }

    const hashedPassword = await hash(password, 10); // Hashing the password

    const users = new User({name,email,password:hashedPassword});
    await users.save();

    // Check if user was created successfully
    if (!users || !users._id) {
        return res.status(500).json({message: "User creation failed"});
    }
 
    //agar purana token hai to clear krdo
    
    res.clearCookie(COOKIE_NAME,{   
        httpOnly:true,
        domain:"localhost",
        signed:true,
         path:"/" ,
    }); 

    const token = createToken(users._id.toString(), users.email, "7d");
    
    const expires = new Date();
    expires.setDate(expires.getDate()+7);
  
    //token genrate hojaye uper wale se  
   //use cookie-parser for send token in cookie (backend to frontend)
  res.cookie(COOKIE_NAME,token,{
    path:"/" , //jha cokkie store hogi root me hi
    domain:"localhost", 
    expires,
    httpOnly:true, //client side script se access na ho
    signed:true, 
});

    return res.status(200).json({
        message: "User created successfully",
        data: users});

 }catch(error){
    console.log(error);
    return res.status(200).json({message:"Error fetching users", error: error.message});    
 }
};

export const userlogin = async (
    req:Request,
    res:Response,
    next:NextFunction ) => {
 try{
    const{email,password}=req.body;

    const exixstinguser =await User.findOne({email});
    if(!exixstinguser){
        return res.status(401).send({message:"User does not exists"});
    }

    const isPasswordValid =await compare(password , exixstinguser.password);
    if(!isPasswordValid){
        return res.status(403).send({message:"Invalid credentials"});
    }


    //agar purana token hai to clear krdo
    res.clearCookie(COOKIE_NAME,{   
        httpOnly:true,
        domain:"localhost",
        signed:true,
         path:"/" ,
    }); 

    const token = createToken(exixstinguser._id.toString(), exixstinguser.email, "7d");
    
    const expires = new Date();
    expires.setDate(expires.getDate()+7);
  
    //token genrate hojaye uper wale se  
   //use cookie-parser for send token in cookie (backend to frontend)
  res.cookie(COOKIE_NAME,token,{
    path:"/" , //jha cokkie store hogi root me hi
    domain:"localhost", 
    expires,
    httpOnly:true, //client side script se access na ho
    signed:true, 
});
     

    return res.status(200).json({message:"Login successful", user: exixstinguser});


}catch(error){
    console.log(error);
    return res.status(200).json({message:"Error fetching users", error: error.message});    
 }
};