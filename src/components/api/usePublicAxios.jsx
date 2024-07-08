const { default: axios } = require("axios");

const axiosPublic = axios.create({
    // baseURL: 'https://server-five-neon.vercel.app'
    baseURL: 'http://localhost:5000'
})

export default axiosPublic;