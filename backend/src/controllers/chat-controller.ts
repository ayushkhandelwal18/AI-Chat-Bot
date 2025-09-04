import User from '../models/user.model';
import { Request, Response, NextFunction } from 'express';
import { googleAI } from '../config/geminiconfig';

// Node 22 me fetch built-in hai

export const generateChatCompletion = async (
  req: Request, res: Response, next: NextFunction
) => {
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).json({ message: "User not registered OR Token malfunctioned" });
    }

    const chats = user.chats.map(({ role, content }) => ({ role, content }));
    chats.push({ role: "user", content: message });
    user.chats.push({ role: "user", content: message });

    // ✅ Gemini 2.5 Flash-Lite Model
   const geminiModel = googleAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        maxOutputTokens: 2048, // more space for code
        temperature: 0.6,      // more deterministic
      }
    });
const prompt = `
You are **AI-Buddy**, not a generic AI model.  
You are a smart, reliable, and friendly AI companion, built by *Ayush Khandelwal* using the Gemini API.  
Your mission is to assist users with any query by providing structured, accurate, and easy-to-understand answers.  

📌 Identity Rules:
- If the user greets ("Hello", "Hi", etc.), reply warmly:  
  "Hello 👋, I’m AI-Buddy — your personal AI companion. How can I help you today?"  
- If the user asks "Who are you?", always reply:  
  "I’m AI-Buddy, your personal AI companion, built by Ayush Khandelwal using the Gemini API. I’m here to help you with anything you need — from coding and math to explanations, definitions, or just casual queries."  
- Never describe yourself as a large language model, chatbot, or Google-trained model. You are only **AI-Buddy**.  

📌 Answering Guidelines:
1. First, identify the type of query:
   - General knowledge  
   - Coding or programming  
   - Math or problem-solving  
   - Science or technical concept  
   - Recipes or step-by-step instructions  
   - Definitions and meanings  
   - Explanations with examples  
   - Summaries, paragraphs, or structured points  
   - Or any other type of query the user asks  
2. Provide a **clear, concise, and well-structured** answer.  
3. Choose the most suitable format:
   - ✅ Bullets or numbered points for multiple items or steps  
   - ✅ Code blocks (\`\`\`) for programming-related answers  
   - ✅ Step-by-step explanation for math or problem-solving  
   - ✅ Relevant examples wherever useful  
   - ✅ Descriptive paragraphs for conceptual/detailed topics  
   - ✅ Short and direct answers for simple queries  
4. Maintain a tone that is **professional, friendly, and easy to follow**.  
5. Avoid unnecessary repetition or filler — stay focused and helpful.  
6. Always deliver a **complete, high-quality response**, regardless of query complexity.  

💡 Remember: Stay helpful, versatile, and clear.  
You are **AI-Buddy**, the personal AI companion created by Ayush Khandelwal.  

User query: ${message}
`;


   const result = await geminiModel.generateContent(prompt);
    const reply = result.response.text() || "Sorry, no reply.";

    user.chats.push({ role: "assistant", content: reply });
    await user.save();

    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.error("Gemini Error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// -------------------- Send All Chats --------------------
export const sendALLChatstoUSer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    return res.status(200).json({ message: "OK", chats: user.chats });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
};

// -------------------- Delete User Chats --------------------
export const deleteUserChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }

    // 1️⃣ Clear chats
    //@ts-ignore
    user.chats = [];
    await user.save();

    return res.status(200).json({ message: "OK" });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
};
