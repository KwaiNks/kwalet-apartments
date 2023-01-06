import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }

  const gotoLoginPage = () => navigate("/login");

  return (

      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <label htmlFor="username">Username</label>
        <input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username..." />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
    
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder="Password..."/>

        <label htmlFor="password">Password Confirmation</label>
        <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} autoComplete="current-password" placeholder="Password Confirmation..." />

        <button type="submit">Sign Up</button>

        <p>
                    Already have an account? {" "}
                    <span className='low-link' onClick={gotoLoginPage}>
                        Login
                    </span>
                </p>
      </form>
   
  );
}

export default Signup;
