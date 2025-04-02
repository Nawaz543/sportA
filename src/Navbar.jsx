import { useState } from "react";
import { Sun, Moon, User, LogIn } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className={`navbar-container ${darkMode ? "dark" : ""}`}>
      <nav className="navbar">
        {/* First Navbar */}
        <div className="logo">SportA</div>
        <div className="nav-buttons">
          <button onClick={toggleDarkMode} className="toggle-button">
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <button className="nav-btn">Login</button>
          <button className="nav-btn">Create/Join Room</button>
          <button className="nav-btn">
            <User />
          </button>
        </div>
      </nav>
      
      {/* Second Navbar */}
      <nav className="second-navbar">
        {['Home', 'About', 'Announcements', 'Live Match', 'Upcoming Match', 'Scoreboard'].map((item) => (
          <button key={item} className="nav-link">{item}</button>
        ))}
      </nav>
    </div>
  );
}
