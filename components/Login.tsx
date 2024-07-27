// components/Login.tsx
import React, { useState } from 'react';
import '../styles/login.css';
import cancel from '../assets/cancel.png';

interface LoginProps {
  setShowLogin: (show: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState<string>("Login");

  return (
    <div className='login'>
      <form className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={cancel} alt='X' />
        </div>
        <div className="login-input">
          {currentState === "Login" ? null : <input type="text" placeholder='Username' required />}
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button type="submit">{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
}

export default Login;