import { Box, useMediaQuery, useTheme } from "@mui/material";
import  { useEffect } from "react";   
import TypingAnim from "../components/typeranimation/Typinganimation";
import Footer from "../components/footer/Footer";

declare global {
  interface Window {
    hasWelcomed?: boolean;
  }
}

function Home() {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

   // Robo voice on homepage load
  useEffect(() => {
  if (!window.hasWelcomed) {        //  ek custom flag
    const utterance = new SpeechSynthesisUtterance("Welcome to AI Buddy");
    utterance.pitch = 1.2;
    utterance.rate = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
    window.hasWelcomed = true;      // dubara mat bolna
  }
}, []);


  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 5,
            my: 10,
          }}
        >
         <img
  className="tilt"
  src="robot.png"
  alt="robot"
  style={{ width: "200px", margin: "auto" }}
/>
          <img
            className="image-inverted rotate"
            src="aicircle.png"
            alt="openai"
            style={{ width: "200px", margin: "auto" }}
          />
        </Box>
        <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="chatt.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              boxShadow: "-5px -5px 105px #64f3d5",
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home
