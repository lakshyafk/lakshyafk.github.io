import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./styles/Navbar.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Set theme attribute on load and when toggled
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Preload both profile images
  useEffect(() => {
    const lightImage = new Image();
    lightImage.src = "/images/profile.jpg";

    const darkImage = new Image();
    darkImage.src = "/images/profile-clr.jpg";
  }, []);

  // Image source depends on current theme
  const profileImage =
    theme === "light"
      ? "/images/profile.jpg"
      : "/images/profile-clr.jpg";

  // Reset imageLoaded when image source changes
  useEffect(() => {
    setImageLoaded(false);
  }, [profileImage]);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div
          className="about-banner"
          style={{
            backgroundImage: `url(${
              theme === "dark"
                ? process.env.PUBLIC_URL + "/images/about-bg-dark.png"
                : process.env.PUBLIC_URL + "/images/about-bg.png"
            })`,
          }}
        >
          <h1 className="about-heading">Hello There</h1>
        </div>

        <div className="about-content">
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#ccc", // Fallback color
              filter: imageLoaded ? "none" : "blur(10px)",
              transition: "filter 0.3s ease",
            }}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="profile-pic"
              onLoad={() => setImageLoaded(true)}
              style={{
                opacity: imageLoaded ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

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
