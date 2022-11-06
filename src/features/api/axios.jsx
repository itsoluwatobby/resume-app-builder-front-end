import axios from 'axios';
const BASE_URL = 'https://resume-builder-app.onrender.com'

export const resumeUrl = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});
