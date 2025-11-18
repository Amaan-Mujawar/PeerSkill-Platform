import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-logo" onClick={() => navigate("/")}>
          PeerSkill
        </div>

        <ul className="nav-menu">
          <li onClick={() => navigate("/")}>Home</li>
          <li>Community</li>
          <li>Jobs</li>
          <li>Companies</li>
          <li>About Us</li>
          <li>For Employers</li>
        </ul>
      </div>

      <button className="nav-login-btn" onClick={() => navigate("/login")}>
        Log In
      </button>
    </nav>
  );
}
