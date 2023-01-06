import React, { useState } from "react";
import { Link } from "react-router-dom";
import KwaLetLogo from "./images/KwaLet-logo.png";
import { FaAlignRight } from "react-icons/fa";

function NavBar({ user, handleLogoutClick }) {
  // const[isOpen, setIsOpen]= useState(false)

  // let handleToggle = () => {
  //   this.setIsOpen({isOpen: !isOpen})
  // }

  return (
    <nav className="navbar">
      {/* <div className="nav-center">
    <div className="nav-header"> */}
      <a href="/">
        <img src={KwaLetLogo} alt="KwaLet" height={100} />
      </a>
      <Link className="link" to="/">
        Home
      </Link>
      {/* <button type="button" className="nav-btn" onClick={handleToggle}>
          <FaAlignRight className="nav-icon" /> */}
      {/* </button> */}
      {user ? (
        <>
          <Link className="link" to="/contactus">
            {" "}
            Contact Us{" "}
          </Link>
          <Link className="link" to="/userreservations"> My Applications </Link>
          <button id="logoutButton" onClick={handleLogoutClick}>Logout</button>
        </>
      ) : (
        <>
          <Link className="link" to="/signup">
            {" "}
            Signup{" "}
          </Link>
          <Link className="link" to="/login">
            {" "}
            Login{" "}
          </Link>
          <Link className="link" to="/contactus">
            {" "}
            Contact Us{" "}
          </Link>
        </>
      )}

      {/* </div>
    <ul className={isOpen?"nav-links show-nav":"nav-links"}></ul>
    </div> */}
    </nav>
  );
}

export default NavBar;
