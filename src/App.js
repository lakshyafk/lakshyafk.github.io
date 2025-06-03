import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./styles/Navbar.css";

function App() {
  const [theme, setTheme] = useState("light");

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

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-banner">

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
            <p>
              I am Lakshy Choudhary, a first year engineering student studying
              in Bangalore (namaskara :D)
            </p>
          </div>
        </div>
      </section>

      {/* MY WORK SECTION */}
      <section id="work" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>My Work</h1>
        <p>This is the My Work section.</p>
      </section>
    </div>
  );
}

export default App;
