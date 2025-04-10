import React, { lazy, Suspense } from 'react';
const Sun = lazy(() => import('lucide-react').then(module => ({ default: module.Sun })));
const Moon = lazy(() => import('lucide-react').then(module => ({ default: module.Moon })));
const User = lazy(() => import('lucide-react').then(module => ({ default: module.User })));
import "./Navbar.css";

export default function Navbar({onLoginClick,onRoomClick,onProfileClick, onAboutClick,toggleDarkMode,}) {
let darkMode=false
const mode=document.body.classList;
if (mode=='dark-mode'){
  darkMode=true;
}
  return (
    <div className={`navbar-container ${darkMode ? "dark" : ""}`}>
      <nav className="navbar">
        {/* First Navbar */}
        <div className="logo">SportA</div>
        <div className="nav-buttons">
          <button onClick={toggleDarkMode} className="toggle-button">
            {darkMode ? <Suspense fallback={<span />}>
                <Sun />
              </Suspense> : <Suspense fallback={<span />}>
                <Moon />
              </Suspense>}
              {console.log({darkMode})}
          </button>
          <button onClick={onLoginClick} className="nav-btn">Login</button>
          <button onClick={onRoomClick} className="nav-btn">Create/Join Room</button>
          <button onClick={onProfileClick}className="nav-btn">
          <Suspense fallback={<span />}>
            <User />
          </Suspense>
          </button>
        </div>
      </nav>
      
      {/* Second Navbar */}
      {/* <nav className="second-navbar">
        {['Home', 'About', 'Announcements', 'Live Match', 'Upcoming Match', 'Scoreboard', 'Room'].map((item) => (
          <button key={item} className="nav-link">{item}</button>
        ))}
      </nav> */}
      <nav className="second-navbar"> 
        <button key="Home" className="nav-link" onClick={onAboutClick}>Home</button>
        <button key="About" className="nav-link" onClick={onAboutClick}>About</button>
        <button key="Announcements" className="nav-link" onClick={onAboutClick}>Announcements</button>
        <button key="Live-Match" className="nav-link" onClick={onAboutClick}>Live Match</button>
        <button key="Upcoming-Match" className="nav-link" onClick={onAboutClick}>Upcoming Match</button>
        <button key="Scoreboard" className="nav-link" onClick={onAboutClick}>Scoreboard</button>
        <button key="Room" className="nav-link" onClick={onAboutClick}>Room</button>
      </nav>
    </div>
  );
}
