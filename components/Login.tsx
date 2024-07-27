import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import '../styles/login.css';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import cancel from '../assets/cancel.png';

interface LoginProps {
  setShowLogin: (show: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setShowLogin }) => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("Login must be used within a StoreContextProvider");
  }

  const { url, setToken } = context;
  const [currentState, setCurrentState] = useState<string>("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event: FormEvent) => {
    event.preventDefault();
    let newUrl = url;

    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      alert("An error occurred during authentication. Please try again.");
    }
  };

  return (
    <div className='login'>
      <form onSubmit={onLogin} className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={cancel} alt='Cancel' />
        </div>
        <div className="login-input">
          {currentState === "Login" ? null : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder='Name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder='Email'
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder='Password'
            required
          />
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