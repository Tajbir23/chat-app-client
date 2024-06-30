

import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    // Check if token is present in localStorage
    'Authorization': localStorage.getItem('token') || ''
  }
});

export default apiClient;
