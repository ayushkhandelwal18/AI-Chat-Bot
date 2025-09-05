import axios from "axios";

export const loginUser = async (email: string, password: string) => {

   try{
      const res=await axios.post("/user/login", { email, password });
      return res.data;
   }
catch (error: any) {
    // axios error hamesha ye shape me throw kar
    throw {
      response: {
        data: {
          message: error.response?.data?.message || "Login Failed"
        }
      }
    };
  }
};
     

  

export const signupUser = async (name: string, email: string, password: string) => {
  try {
    const res = await axios.post("/user/signup", { name, email, password });
    return res.data;
  } catch (error: any) {
    // axios error hamesha ye shape me throw kar
    throw {
      response: {
        data: {
          message: error.response?.data?.message || "Signup Failed"
        }
      }
    };
  }
};

export const checkAuthStatus = async () => {

     const res=await axios.get("/user/auth-status");

     if(res.status !== 200){
        throw new Error("Unable to authenticate user");
     }

     const data =await res.data;
     return data;
};

export const sendChatRequest = async (message:string) => {

     const res=await axios.post("/chat/new" , {message});

     if(res.status !== 200){
        throw new Error("Unable to send chat");
     }

     const data =await res.data;
     return data;
};

export const getUserChats = async () => {

     const res=await axios.get("/chat/all-chats");

     if(res.status !== 200){
        throw new Error("Unable to get all chats");
     }

     const data =await res.data;
     return data;
};



export const deleteUserChats = async () => {

     const res=await axios.delete("/chat/delete");

     if(res.status !== 200){
        throw new Error("Unable to delete chat");
     }

     const data =await res.data;
     return data;
};


export const userLogout = async () => {

     const res=await axios.get("/user/logout");

     if(res.status !== 200){
        throw new Error("Unable to logout");
     }

     const data =await res.data;
     return data;
};