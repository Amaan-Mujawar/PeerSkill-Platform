// src/services/api.js
import axios from "axios";

// ❌ process.env is not allowed in Vite
// const baseURL = process.env.REACT_APP_API_URL || "http://localhost:8080";

// ✅ Use Vite environment variables
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
