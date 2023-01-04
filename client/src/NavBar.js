import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
      }
    });
  }

  return (
    // <header>
    <nav className='navbar'>
      <div>
        <Link className="link" to="/">Home</Link>
      </div>
      <div className="navContainer">
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link className="link" to="/signup"> Signup </Link>
            <Link className="link" to="/login"> Login </Link>
            <Link className="link" to="/contactus"> Contact Us </Link>
            <Link className="link" to="/apartment"> Apply </Link>
          </>
        )}
      </div>
      </nav>
    // </header>
  );
}

export default NavBar;
