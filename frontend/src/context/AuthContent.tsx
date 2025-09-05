

import { createContext, useEffect, useState, useContext } from "react";
import type { ReactNode } from "react";
import { checkAuthStatus, loginUser ,userLogout ,signupUser } from "../helpers/api";

type User ={
    name:string;
    email:string;
    
}

type UserAuth={
    isLoggedIn:boolean;
    user:User | null;

    login:(email:string, password:string)=>Promise<void>;
    signup:(name:string,email:string,password:string)=>Promise<void>;
    logout:()=>Promise<void>;

};

const AuthContext =createContext<UserAuth | null>(null);

export const AuthProvider =({children} : {children : ReactNode})=>{
   const [user ,setUser] = useState<User | null>(null);
   const [isLoggedIn , setIsLoggedIn] = useState(false);



   useEffect(()=>{
    //fetch if the users's cookies are valid then skip login

    async function checkStatus(){
        const data =await checkAuthStatus();
        if(data){
        setUser({email:data.email , name:data.name});
        setIsLoggedIn(true);
    }
   }
    checkStatus();

   }, []);

   const login =async(email:string,password:string)=>{ 
    const data =await loginUser(email,password);
    if(data){
        setUser({email:data.email , name:data.name});
        setIsLoggedIn(true);
    }
    return data;
   };




    const signup =async(name:string,email:string,password:string)=>{ 
          const data =await signupUser(name,email,password);
    if(data){
        setUser({email:data.email , name:data.name});
        setIsLoggedIn(true);
    }
    return data;
    };

    
    const logout =async()=>{ 
        await userLogout();
        setIsLoggedIn(false);
        setUser(null);
        window.location.reload();//reload krenge page ko after logout 
        //bcz time leti hai cookie delete hone me
    };


    const value ={
        user,
        isLoggedIn,
        login,
        signup,
        logout
    };

    return <AuthContext.Provider value={value}>

        {children}

    </AuthContext.Provider>



};


export const useAuth = () =>  useContext(AuthContext);