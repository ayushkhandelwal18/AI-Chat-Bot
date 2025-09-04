# 🤖 AI‑Buddy

A smart, reliable, and friendly AI chatbot built with the **MERN stack** + **Gemini API**, designed to handle all kinds of queries (general, coding, math, science, recipes, explanations, definitions, summaries, and more) and reply in a clean, structured format.

---

## ✨ Features

- **Create user authentication and authorization system** (custom auth)
- **Implementing express-validators middleware** to validate data
- **Storing user's chats in MongoDB**
- **Generating custom and our own authentication system**
- **Using JWT authorization tokens & HTTP‑Only cookies** (with `cookie-parser`)
- **Protecting user routes with verification checks** (auth middleware)
- **Modern React app with Vite** (TypeScript + SWC)
- **Beautiful chat UI with Material UI (MUI)**
- **Complete responsive design**
- **React Hot Toast** for feedback
- **React Icons** for iconography
- **React Syntax Highlighter** for code answers
- **React Type Animation** for subtle motion/typing effects

> Bonus: Clean, maintainable codebase, sensible folder structure, and production‑ready configurations.

---

## 🧰 Tech Stack

**Frontend:** React, Vite, TypeScript, MUI, React Hot Toast, React Icons, React Syntax Highlighter, React Type Animation
**Backend:** Node.js, Express.js, TypeScript, express‑validator, cookie‑parser, JSON Web Tokens (JWT)
**Database:** MongoDB (Mongoose)
**AI:** Google Gemini API

---

## 🗂️ Project Structure

```bash
AI-Buddy/
├─ backend/
│  ├─ src/
│  │  ├─ config/          
│  │  ├─ controllers/     
│  │  ├─ db/          
│  │  ├─ models/           
│  │  ├─ routes/     
│  │  ├─ utils/        
│  │  └─ index.ts & app.ts       
│  └─ package.json
│
├─ frontend/
│  ├─ src/
│  │  ├─ assets/      
│  │  ├─ components/          
│  │  ├─ context/         
│  │  ├─ helpers/             
│  │  ├─ pages/          
│  │  └─ app.tsx & app.css & main.tsx &index.css
│  ├─ index.html
│  └─ package.json
│
├─ README.md

```

---

## 🔐 Environment Variables

Create **backend** `.env`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=super_secret_key
COOKIE_SECRET=another_secret_if_used
GEMINI_API_KEY=your_gemini_api_key

```



---

## ⚙️ Installation & Setup

```bash
# 1) Clone repo
git clone https://github.com/ayushkhandelwal18/AI-Chat-Bot.git
cd ai-chat-bot

# 2) Backend setup
cd backend
npm install
npm start    

# 3) Frontend setup
cd ../frontend
npm install
npm run dev
```



---

## 🔑 Authentication Flow (JWT + HTTP‑Only Cookies)

1. **Signup/Login** → validates using `express-validator`
2. On success → issue **JWT access token**; set as **HTTP‑Only cookie**
3. **Protected routes** check `req.cookies` → verify JWT → attach `req.user`
4. **Logout** → clear cookie



---

## 🧪 API Endpoints 


User Routes:

POST /api/v1/user/signup – Register a new user

POST /api/v1/user/login – Login with credentials

GET /api/v1/user/auth-status – Check authentication status

GET /api/v1/user/logout – Logout and clear cookies

Chat Routes:

POST /api/v1/chat/new – Send a new chat message

GET /api/v1/chat/all-chats – Get all chats of logged-in user

DELETE /api/v1/chat/delete – Delete all chats of logged-in user



---

## 🖥️ UI Highlights

- **MUI** components with responsive layout
- **React Hot Toast** for async feedback
- **Syntax highlighting** in AI code answers
- **Type animation** for subtle branding


---------

## 🤝 Contributing

Pull requests are welcome!
------

## Customization

Change the prompt in chat.tsx to personalize your chatbot’s behavior
--------


