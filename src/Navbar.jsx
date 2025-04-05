import { useState } from "react";
import { Sun, Moon, User, LogIn } from "lucide-react";
import "./Navbar.css";

export default function Navbar({onLoginClick,onRoomClick,onProfileClick,toggleDarkMode,darkMode}) {

  return (
    <div className={`navbar-container ${darkMode ? "dark" : ""}`}>
      <nav className="navbar">
        {/* First Navbar */}
        <div className="logo">SportA</div>
        <div className="nav-buttons">
          <button onClick={toggleDarkMode} className="toggle-button">
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <button onClick={onLoginClick} className="nav-btn">Login</button>
          <button onClick={onRoomClick} className="nav-btn">Create/Join Room</button>
          <button onClick={onProfileClick}className="nav-btn">
            <User />
          </button>
        </div>
      </nav>
      
      {/* Second Navbar */}
      <nav className="second-navbar">
        {['Home', 'About', 'Announcements', 'Live Match', 'Upcoming Match', 'Scoreboard', 'Room'].map((item) => (
          <button key={item} className="nav-link">{item}</button>
        ))}
      </nav>
    </div>
  );
}
