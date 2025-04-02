import { useState } from "react";
import Login from "./Login";
import Navbar from "./Navbar";

function App(){
  const [showLogin, setShowLogin] = useState(false);

  return <>
     <Navbar onLoginClick={() => setShowLogin(true)} />
     {showLogin && <Login onClose={() => setShowLogin(false)} />}
  </>
}

export default App;