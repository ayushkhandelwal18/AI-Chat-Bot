// import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Typinganimation() {
return (
    <TypeAnimation
     sequence={[
  "Meet Your AI-Buddy 🤖",
  1800,
  "Your Personalized AI Assisnat 💻",
  1500,
  "Answers, Suggestions & Fun Conversations ✨",
  1500,
  "Learn, Explore & Create With AI 🚀",
  1500,
  "Your AI. Your Rules. Always 😎",
  1500,
  "Powered by Gemini ⚡",
  1000,
  
  
]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '50px',color:"white",display: 'inline-block', textShadow:"1px 1px 20px #000" }}
      repeat={Infinity}
    />
  );
}

export default Typinganimation
