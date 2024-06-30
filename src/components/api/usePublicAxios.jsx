const { default: axios } = require("axios");

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})

export default axiosPublic;