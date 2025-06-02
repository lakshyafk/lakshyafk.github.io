import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./styles/Navbar.css";
import PongGame from "./components/PongGame";

function App() {
  const [theme, setTheme] = useState("light");
  const [showGame, setShowGame] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <section id="about" className="about-section">
<div
  className="about-banner"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-bg.png)`
  }}
>
  <h1 className="about-heading">Hello There</h1>
</div>

  <div className="about-content">
    <img
      src="/images/profile.jpg"
      alt="Profile"
      className="profile-pic"
    />
    <div className="about-text">
      <h2>About Me</h2>
      <p>I am Lakshy Choudhary, a first year engineering student studying in bangalore (namaskara :D)</p>
    </div>
  </div>
</section>

      <section id="work" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>My Work</h1>
        <p>This is the My Work section.</p>

        <div style={{ marginTop: "40px" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Go Pong Game</h3>
          {!showGame && (
            <button
              onClick={() => setShowGame(true)}
              style={{
                padding: "10px 20px",
                fontSize: "1rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              ▶️ Play Pong
            </button>
          )}

          {showGame && <PongGame />}
        </div>
      </section>
    </div>
  );
}

export default App;
