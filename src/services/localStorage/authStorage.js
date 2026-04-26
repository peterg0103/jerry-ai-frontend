// src/services/localStorage/authStorage.js
export const authStorage = {
  // Save user data after login
  saveUser: (userData) => {
    if (userData.token) {
      localStorage.setItem("token", userData.token);
    }
    if (userData.user) {
      localStorage.setItem("user", JSON.stringify(userData.user));
    }
    if (userData.remember) {
      localStorage.setItem("remember", "true");
    }
  },

  // Get user data
  getUser: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  // Get auth token
  getToken: () => {
    return localStorage.getItem("token");
  },

  // Check if user is logged in
  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },

  // Clear user data on logout
  clearUser: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("remember");
  },

  // Save user preferences
  savePreferences: (preferences) => {
    localStorage.setItem("preferences", JSON.stringify(preferences));
  },

  // Get user preferences
  getPreferences: () => {
    const prefs = localStorage.getItem("preferences");
    return prefs ? JSON.parse(prefs) : null;
  }
};