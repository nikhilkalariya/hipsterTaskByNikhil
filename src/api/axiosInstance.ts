import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("BASE_URL", BASE_URL);
 
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
