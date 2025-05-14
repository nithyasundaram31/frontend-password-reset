// src/config.js

const API_BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:4000'
    : 'https://backend-password-reset-1-8isk.onrender.com';

export default API_BASE_URL;