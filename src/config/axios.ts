import axios from "axios";
export const axiosConfig = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
  withCredentials: true,
});

export default axiosConfig;
