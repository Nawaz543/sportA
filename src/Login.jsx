import "./Login.css";

export default function Login({ onClose }) {
  return (
    <div className="overlay">
      <div className="login-box" id="login-box">
        <h2>Login</h2>
        <input type="email" placeholder="Email" className="input-box" />
        <input type="password" placeholder="Password" className="input-box" />
        <button className="login-btn">Login</button>
        <div className="links">
          <a href="#">Forgot Password?</a>
          <a href="#">Don't have an account?</a>
        </div>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
}
