import api from "./api";

export const register = (userDTO) => api.post("/auth/register", userDTO).then(r => r.data);
export const login = (creds) => api.post("/auth/login", creds).then(r => r.data);
export const forgotPassword = (email) => api.post("/auth/forgot-password", { email }).then(r => r.data);
export const resetPassword = (payload) => api.post("/auth/reset-password", payload).then(r => r.data);
export const me = () => api.get("/auth/me").then(r => r.data);
