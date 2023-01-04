import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password}),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }

  const goToSignupPage = () => navigate("/signup")

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="username">Username</label>
        <input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

        <button type="submit">Login</button>
        <p>
        Don't have an account? {" "}
        <span className='link' onClick={goToSignupPage}> Sign up </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
