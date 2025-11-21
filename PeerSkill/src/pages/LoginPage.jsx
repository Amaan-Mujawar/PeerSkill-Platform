import React, { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login({ email, password });
      const token = res?.token;

      localStorage.setItem("token", token);
      setMsg("Login successful!");
    } catch (err) {
      setMsg(err?.response?.data || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <input
        className="login-input"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="login-input"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="auth-login-btn" onClick={handleLogin}>
        Login
      </button>

      <p className="login-msg">{msg}</p>

      {/* CREATE ACCOUNT LINK */}
      <div className="login-bottom-text">
        Don't have an account?{" "}
        <span
          className="register-link"
          onClick={() => navigate("/register")}
        >
          Create one
        </span>
      </div>
    </div>
  );
}
