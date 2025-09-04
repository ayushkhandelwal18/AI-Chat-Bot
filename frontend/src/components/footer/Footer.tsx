// import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
    <p style={{ fontSize: "28px", textAlign: "center", padding: "20px", color: "#fff" }}>
   🚀 Built with ❤️ and code by    
  <span>
    <Link
      style={{ color: "#00ffcc", fontWeight: "bold", textDecoration: "underline" }}
      className="nav-link"
      to={"https://github.com/ayushkhandelwal18"}
    >
      Ayush Khandelwal
    </Link>
  </span>
  👨‍💻 |  Full-Stack Developer & AI Enthusiast 
</p>


      </div>
    </footer>
  );
}

export default Footer
