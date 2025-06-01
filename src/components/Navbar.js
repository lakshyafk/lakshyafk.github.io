import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">LAKSHY CHOUDHARY</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="resume.pdf">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;