import axios from 'axios';
const BASE_URL = 'http://localhost:5500/api/user'
const RESUME_URL = 'http://localhost:5500/api/resume'

export const userUrl = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export const resumeUrl = axios.create({
  baseURL: RESUME_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
