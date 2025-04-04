import React from "react";
import { useState,useEffect } from "react";
import Navbar from "./Navbar";
const Login = React.lazy(()=>(import ("./Login")));
const Room = React.lazy(()=>(import ("./Room")));
const Profile = React.lazy(()=>(import ("./Profile")));

function App(){
  const [showLogin, setShowLogin] = useState(false); // state to control login
  const [showRoom, setShowRoom] = useState(false); // State to control Create/join room
  const [activeIndex, setActiveIndex] = useState(0); // state to control status of each elements in navbar
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
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
        //set dark/light mode
        toggleDarkMode ={ () => 
            {setDarkMode((prevMode) => !prevMode);
            document.body.classList.toggle("dark-mode", !darkMode);}
        }
      />
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
  </>
  
}

export default App;