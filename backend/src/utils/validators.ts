import { log } from 'console';
import { Request, Response, NextFunction } from 'express';
import { body, ValidationChain,validationResult} from 'express-validator';

export const validate = (validations : ValidationChain[]) => {
    return async(req:Request,res:Response,next:NextFunction)=>{
        for(let validation of validations){
            await validation.run(req); // <-- You need to run each validation
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()}); // <-- Return errors if any
        }
        next(); // <-- Proceed if no errors
    };
}; 

export const loginValidator=[
     
    body("email").trim().isEmail().withMessage("Invalid email format"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password should be at least 6 characters long") 
    
];

export const signupValidator=[
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator //iska mtlb hai loginValidator ka sara code yaha aa jayega
    

];




    

