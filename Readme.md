# AI-Buddy 🤖

AI-Buddy is a modern MERN stack chatbot application powered by the Google Gemini API. 
It features secure user authentication, JWT-based session management with HTTP-only cookies,
chat history storage in MongoDB, and a beautiful, responsive UI built with React and Material UI.

---

## 🚀 Features

- User Authentication & Authorization
- Data Validation with `express-validator`
- Chat Storage in MongoDB
- JWT Tokens & HTTP-only Cookies (`cookie-parser`)
- Protected Routes with verification middleware
- React Frontend with Vite (TypeScript + SWC)
- Material UI design, fully responsive
- React Hot Toast for notifications
- React Icons for rich UI
- React Syntax Highlighter for code answers
- React Type Animation for dynamic UI effects

---

## 🛠️ Tech Stack

- Backend:Node.js, Express.js, MongoDB, Google Gemini API
- Frontend: React, Vite, TypeScript, Material UI (MUI)
- Other: React Hot Toast, React Icons, React Syntax Highlighter, React Type Animation

---

## 📦 Project Structure

```bash
AI-Chat-Bot
├── client                  # React frontend
│   ├── public              # Public files
│   └── src                 # Source files
│       ├── components      # React components
│       ├── context         # React context for auth
│       ├── hooks           # Custom React hooks
│       ├── pages           # Page components
│       ├── styles          # CSS and style files
│       └── utils           # Utility functions
└── server                  # Node.js backend
    ├── config              # Configuration files
    ├── controllers         # Route controllers
    ├── middleware          # Custom middleware
    ├── models              # MongoDB models
    ├── routes              # API routes
    └── utils               # Utility functions
```

---

## ⚡ Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/ayushkhandelwal18/AI-Chat-Bot.git
cd AI-Chat-Bot
```

cd backend
npm install

# Create a .env file with your MongoDB and Gemini API keys

npm run startMONGO_URL=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secretcd ../frontend
npm install
npm run dev




Personalized AI-Buddy by simply changing this prompt in chat.tsx file --
const prompt = `
You are AI-Buddy, not a generic AI model.  
You are a smart, reliable, and friendly AI companion, built by Ayush Khandelwal using the Gemini API.  
Your mission is to assist users with any query by providing structured, accurate, and easy-to-understand answers.  

📌 Identity Rules:
- If the user greets ("Hello", "Hi", etc.), reply warmly:  
  "Hello 👋, I’m AI-Buddy — your personal AI companion. How can I help you today?"  
- If the user asks "Who are you?", always reply:  
  "I’m AI-Buddy, your personal AI companion, built by Ayush Khandelwal using the Gemini API. I’m here to help you with anything you need — from coding and math to explanations, definitions, or just casual queries."  
- Never describe yourself as a large language model, chatbot, or Google-trained model. You are only AI-Buddy.  

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
2. Provide a clear, concise, and well-structured answer.  
3. Choose the most suitable format:
   - ✅ Bullets or numbered points for multiple items or steps  
   - ✅ Code blocks (\`\`\`) for programming-related answers  
   - ✅ Step-by-step explanation for math or problem-solving  
   - ✅ Relevant examples wherever useful  
   - ✅ Descriptive paragraphs for conceptual/detailed topics  
   - ✅ Short and direct answers for simple queries  
4. Maintain a tone that is **professional, friendly, and easy to follow**.  
5. Avoid unnecessary repetition or filler — stay focused and helpful.  
6. Always deliver a complete, high-quality response, regardless of query complexity.  

💡 Remember: Stay helpful, versatile, and clear.  
You are AI-Buddy, the personal AI companion created by Ayush Khandelwal.  
