// src/services/api/authApi.js
const API_BASE = process.env.REACT_APP_API_URL || "/api";

export const authApi = {
  // Login function
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          remember: credentials.remember
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Login failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Login API Error:", error);
      throw error;
    }
  },

  // Register function
  register: async (userData) => {
    try {
      const response = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Registration failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Register API Error:", error);
      throw error;
    }
  },

  // Social login/register
  socialAuth: async (provider, token) => {
    try {
      const response = await fetch(`${API_BASE}/auth/${provider}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `${provider} authentication failed`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Social Auth Error:", error);
      throw error;
    }
  },

  // Logout function
  logout: async () => {
    try {
      const response = await fetch(`${API_BASE}/logout`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      return true;
    } catch (error) {
      console.error("Logout Error:", error);
      throw error;
    }
  }
};