import axios from 'axios';
const BASE_URL = 'https://resume-api.onrender.com';

export const resumeUrl = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});
