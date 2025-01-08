// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import users from '../database'
import { useNavigate } from "react-router-dom";


function Login({ toggleSignup }) {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };
   
          
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

       for(let i =0;i<users.length;i++){
     if(users[i].email === email && users[i].password === password){
       alert('Login successful!');
       return;
     }
   }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button id="signup_id" onClick={goToSignUp}>Sign up here</button>
      </p>
    </div>
  );
}
 



export default Login; 
