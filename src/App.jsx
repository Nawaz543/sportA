import React  from "react";
import { useState,useEffect } from "react";
import Announcement from "./nav2/Announcement";
import Live from "./nav2/Live";

const Navbar = React.lazy(()=>(import ("./Navbar")));
const Login = React.lazy(()=>(import ("./Login")));
const Room = React.lazy(()=>(import ("./Room")));
const Profile = React.lazy(()=>(import ("./Profile")));
const About = React.lazy(()=>(import ("./nav2/about")));
const Massage = React.lazy(()=>(import ("./home/Massage")));

function App(){
  const [showLogin, setShowLogin] = useState(false); // state to control login
  const [showRoom, setShowRoom] = useState(false); // State to control Create/join room
  const [activeIndex, setActiveIndex] = useState(0); // state to control status of each elements in navbar
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showAnnouncement , setShowAnnouncement] = useState(false);
  const [showLive , setShowLive] = useState(false);
  const user = {
   name: "John Doe",
   email: "john@example.com",
   photoURL: "", // if empty, shows add icon
   profileComplete: true,
  };

   // Toggle dark mode
   const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  // Use useEffect to change login-box class when darkMode changes
  useEffect(() => {
    // Only target the login box itself
    const loginBox = document.getElementById("login-box");
  
    if (loginBox ) {
      if (darkMode) {
        loginBox.classList.add("dark-mode");
      } else {
        loginBox.classList.remove("dark-mode");
      }
    }
  }, [darkMode, showLogin]);

  // Use useEffect to change Room container class when darkMode changes
  useEffect(() => {
    // Only target the room container itself
    const RoomBox = document.getElementById("room-container");
  
    if (RoomBox ) {
      if (darkMode) {
        RoomBox.classList.add("dark-mode");
      } else {
        RoomBox.classList.remove("dark-mode");
      }
    }
  }, [darkMode, showRoom]);
  
  

  return <> 
      {/* Navbar */}
     <Navbar 
        onLoginClick={() => 
          {setShowLogin(true);
          setActiveIndex(1);}
        }
        onRoomClick={() => 
          {setShowRoom(true);
            setActiveIndex(2);}
        }
        onProfileClick={() => 
          {setShowProfile(true);
            setActiveIndex(3);}
        }
        onAboutClick={() => 
          {setShowAbout(true);
            setActiveIndex(4);
            }
        }
        onAnnouncementClick={() => 
          {setShowAnnouncement(true);
            setActiveIndex(5);
            }
        }
        onLiveClick={() => 
          {setShowLive(true);
            setActiveIndex(6);
            }
        }
        //set dark/light mode
        toggleDarkMode ={ () => 
            {setDarkMode((prevMode) => !prevMode);
            document.body.classList.toggle("dark-mode", !darkMode);}
        }
      />
        {/* home -> massage */}
        {(activeIndex === 0 || activeIndex === 1 || activeIndex === 3) && (
           <Massage key={darkMode ? 'dark' : 'light'} />
          )}

        
      {/* login */}
     { activeIndex==1 && showLogin && <Login onClose={() => 
        {setShowLogin(false)
          setActiveIndex(0);}
     }
      />}
      {/* create/join room */}
       { activeIndex==2 && showRoom && <Room onBack={() => 
        {setShowRoom(false)
          setActiveIndex(0);}
      } />}
      {/* profile */}
      {activeIndex==3 && showProfile && <Profile user={user} onBack={() => 
        {setShowProfile(false);
          setActiveIndex(0); } 
      }/>}
    {/* about */}
    { activeIndex==4 && showAbout && <About  onBack={() => 
        {setShowAbout(false);
          setActiveIndex(0); } 
      } />}
      {/* announcement */}
      { activeIndex==5 && showAnnouncement && <Announcement  onBack={() => 
        {setShowAnnouncement(false);
          setActiveIndex(0); } 
      } />}
      {/* Live */}
      { activeIndex==6 && showLive && <Live  onBack={() => 
        {setShowLive(false);
          setActiveIndex(0); } 
      } />}
  </>
  
}

export default App;