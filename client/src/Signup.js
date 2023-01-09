import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "semantic-ui-react";

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
        response.json().then((user) => {
          setUser(user);
        });
        navigate("/");
      }
    });
  }

  const gotoLoginPage = () => navigate("/login");

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <label htmlFor="username">Username</label>

      <Input  type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        icon='user' 
        iconPosition='left' 
        placeholder='Username...' />

      {/* <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username..."
      /> */}

      <label htmlFor="email">Email</label>
      <Input  type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..." icon='at' iconPosition='left' />

      {/* <input
        type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
      /> */}

      <label htmlFor="password">Password</label>
      <Input  type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        placeholder="Password..."
        icon='key' 
        iconPosition='left'/>

      {/* <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        placeholder="Password..."
      /> */}

      <label htmlFor="password">Password Confirmation</label>
      <Input  type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
        placeholder="Password Confirmation..." 
        icon='key' 
        iconPosition='left' />

      {/* <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
        placeholder="Password Confirmation..."
      /> */}

      <Button type="submit">Sign Up</Button>

      <p>
        Already have an account?{" "}
        <span className="lowlink" onClick={gotoLoginPage}>
          Login
        </span>
      </p>
    </form>
  );
}

export default Signup;
