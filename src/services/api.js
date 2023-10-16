import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request.use(
//   (config) => {
//     // Get token from localStorage
//     const accessToken = localStorage.getItem('accessToken');

//     // If token is present add it to request's Authorization Header
//     if (accessToken) {
//       // eslint-disable-next-line no-param-reassign
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default instance;
