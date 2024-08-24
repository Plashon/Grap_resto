import axios from "axios";
import TokenService from "./token.server";

const baseURL = import.meta.env.VITE_BASE_URL;
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
//add interceptor to request object
instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
