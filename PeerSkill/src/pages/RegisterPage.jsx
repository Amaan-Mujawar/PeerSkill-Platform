import React, { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  // All UserDTO fields
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
    <div style={{ padding: 24, maxWidth: 480, margin: "40px auto" }}>
      <h2>Create Your Account</h2>

      <input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => updateField("name", e.target.value)}
        style={{ display: "block", width: "100%", margin: "8px 0" }}
      />

      <input
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => updateField("email", e.target.value)}
        style={{ display: "block", width: "100%", margin: "8px 0" }}
      />

      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => updateField("password", e.target.value)}
        style={{ display: "block", width: "100%", margin: "8px 0" }}
      />

      <input
        placeholder="Phone Number"
        value={form.phoneNumber}
        onChange={(e) => updateField("phoneNumber", e.target.value)}
        style={{ display: "block", width: "100%", margin: "8px 0" }}
      />

      <select
        value={form.gender}
        onChange={(e) => updateField("gender", e.target.value)}
        style={{ display: "block", width: "100%", margin: "8px 0" }}
      >
        <option value="">Select Gender</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>

      <input
        placeholder="City"
        value={form.city}
        onChange={(e) => updateField("city", e.target.value)}
        style={{ display: "block", width: "100%", margin: "8px 0" }}
      />

      <input
        placeholder="State"
        value={form.state}
        onChange={(e) => updateField("state", e.target.value)}
        style={{ display: "block", width: "100%", margin: "8px 0" }}
      />

      <button
        onClick={handleRegister}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          background: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Register
      </button>

      <p style={{ color: "green", marginTop: 10 }}>{msg}</p>
    </div>
  );
}
