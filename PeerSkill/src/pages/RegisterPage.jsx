import React, { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    city: "",
    state: "",
  });

  const [msg, setMsg] = useState("");

  const updateField = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleRegister = async () => {
    try {
      await register(form);
      setMsg("Registration successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/login?email=" + encodeURIComponent(form.email));
      }, 1000);
    } catch (err) {
      setMsg(err?.response?.data || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h2>Create Your Account</h2>

      <input
        className="register-input"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => updateField("name", e.target.value)}
      />

      <input
        className="register-input"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => updateField("email", e.target.value)}
      />

      <input
        className="register-input"
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => updateField("password", e.target.value)}
      />

      <input
        className="register-input"
        placeholder="Phone Number"
        value={form.phoneNumber}
        onChange={(e) => updateField("phoneNumber", e.target.value)}
      />

      <select
        className="register-select"
        value={form.gender}
        onChange={(e) => updateField("gender", e.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>

      <input
        className="register-input"
        placeholder="City"
        value={form.city}
        onChange={(e) => updateField("city", e.target.value)}
      />

      <input
        className="register-input"
        placeholder="State"
        value={form.state}
        onChange={(e) => updateField("state", e.target.value)}
      />

      <button className="register-btn" onClick={handleRegister}>
        Register
      </button>

      <p className="register-msg">{msg}</p>

      {/* Already have account? */}
      <div className="register-bottom-text">
        Already have an account?{" "}
        <span
          className="login-link"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </div>
    </div>
  );
}
