const { default: axios } = require("axios");

const axiosSecure = axios.create({
  // baseURL: 'https://server-five-neon.vercel.app/api'
  baseURL: 'http://localhost:5000/api'
});

export default axiosSecure;