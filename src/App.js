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
    lightImage.src = process.env.PUBLIC_URL + "/images/profile.jpg";

    const darkImage = new Image();
    darkImage.src = process.env.PUBLIC_URL + "/images/profile-clr.jpg";
  }, []);

  // Image source depends on current theme
  const profileImage =
    theme === "light"
      ? process.env.PUBLIC_URL + "/images/profile.jpg"
      : process.env.PUBLIC_URL + "/images/profile-clr.jpg";

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
              Namaskara :D !
              </p>
              <p>
              I am <strong>Lakshy Choudhary</strong>, a B.E. in Computer Science student in my IIIrd Semester at Dayananda Sagar College of Engineering, Bengaluru.
            </p>
            <p>
              I am proficient in languages like <strong>C, C++, Go, Python, and TypeScript</strong>, leveraging frameworks such as <strong>React.js, Next.js, FastAPI, and Django</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech-stack" className="tech-stack-section">
        <h2 className="tech-stack-heading">Tech Stack</h2>
        <div className="tech-stack-container">
          <div className="tech-stack-scroll">
            <div className="tech-stack-item">C</div>
            <div className="tech-stack-item">C++</div>
            <div className="tech-stack-item">Go</div>
            <div className="tech-stack-item">Python</div>
            <div className="tech-stack-item">TypeScript</div>
            <div className="tech-stack-item">React.js</div>
            <div className="tech-stack-item">Next.js</div>
            <div className="tech-stack-item">FastAPI</div>
            <div className="tech-stack-item">Django</div>
            <div className="tech-stack-item">WebRTC</div>
            <div className="tech-stack-item">Prisma ORM</div>
            <div className="tech-stack-item">SQLAlchemy</div>
            {/* Duplicate for seamless loop */}
            <div className="tech-stack-item">C</div>
            <div className="tech-stack-item">C++</div>
            <div className="tech-stack-item">Go</div>
            <div className="tech-stack-item">Python</div>
            <div className="tech-stack-item">TypeScript</div>
            <div className="tech-stack-item">React.js</div>
            <div className="tech-stack-item">Next.js</div>
            <div className="tech-stack-item">FastAPI</div>
            <div className="tech-stack-item">Django</div>
            <div className="tech-stack-item">WebRTC</div>
            <div className="tech-stack-item">Prisma ORM</div>
            <div className="tech-stack-item">SQLAlchemy</div>
          </div>
        </div>
      </section>

      {/* MY WORK SECTION */}
      <section id="work" className="work-section">
        <h1 className="work-heading">My Work</h1>
        <div className="projects-grid">
          {/* Bhejo Project */}
          <div className="project-card">
            <div className="project-header">
              <h2>Bhejo</h2>
              <span className="project-tag">P2P File Transfer</span>
            </div>
            <p className="project-description">
              A secure, serverless P2P file transfer application using WebRTC with ephemeral room codes. 
              Features chunking for large files, real-time progress tracking, and automatic DTLS encryption for privacy.
            </p>
            <a 
              href="https://github.com/git-lakshy/bhejo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* Vayu Mitra Project */}
          <div className="project-card">
            <div className="project-header">
              <h2>Vayu Mitra</h2>
              <span className="project-tag">AI-Powered Clean Air</span>
            </div>
            <p className="project-description">
              Full-stack platform for Smart India Hackathon 2025 addressing air pollution. 
              Built with FastAPI backend and React.js dashboard for real-time AQI data processing, source identification, and AI-powered policy recommendations.
            </p>
            <a 
              href="https://github.com/git-lakshy/sih-25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* VendIn Project */}
          <div className="project-card">
            <div className="project-header">
              <h2>VendIn</h2>
              <span className="project-tag">Vendor Discovery</span>
            </div>
            <p className="project-description">
              A vendor discovery platform built with Django featuring location-based search, 
              category filters, and effective vendor listings to help users find nearby vendors.
            </p>
            <a 
              href="https://github.com/git-lakshy/vendin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* Smriti-AI Project */}
          <div className="project-card">
            <div className="project-header">
              <h2>Smriti-AI</h2>
              <span className="project-tag">Opensource</span>
            </div>
            <p className="project-description">
              Full-stack note-taking application with adaptive quiz assessment system. 
              Built with Next.js, TypeScript, and Prisma ORM, featuring personalized question difficulty based on user responses.
            </p>
            <a 
              href="https://github.com/git-lakshy/smriti-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
