import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/Navbar.css";

const texts = [
  "Lakshy Choudhary",
  "Web Developer",
  "Creative Coder",
  "Problem Solver",
  "Tech Enthusiast",
  "Curious Learner",
  "ML Enthusiast",
  "Midnight Debugger",
  "Game Enthusiast",
  "Masti Paglu",
  "Chronic Brainrot",
  "Lazy Perfectionist",
  "Heavy Sleeper",
  "Tonight's the Night"
];


export default function Navbar({ toggleTheme, theme }) {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setTextIndex((prev) => (prev + 1) % texts.length);
  }, 1200); // Total cycle: 0.2s fade in + 0.75s visible + 0.25s fade out
  return () => clearInterval(interval);
}, []);




  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="morphing-text-wrapper">
          <AnimatePresence mode="wait">
  <motion.div
    key={textIndex}
    className="morphing-text"
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -5 }}
    transition={{
      duration: 0.25,
      ease: "easeInOut"
    }}
  >
    {texts[textIndex]}
  </motion.div>
</AnimatePresence>


        </div>
      </div>

      <div className="navbar-right">
  <button
    className="nav-btn"
    onClick={() =>
      document.getElementById("about").scrollIntoView({ behavior: "smooth" })
    }
  >
    About
  </button>
  <button
    className="nav-btn"
    onClick={() =>
      document.getElementById("work").scrollIntoView({ behavior: "smooth" })
    }
  >
    My Work
  </button>
  <a
    className="nav-btn"
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    My Resume
  </a>
  <button className="theme-btn" onClick={toggleTheme}>
    {theme === "light" ? <FaMoon /> : <FaSun />}
  </button>
</div>

    </nav>
  );
}
