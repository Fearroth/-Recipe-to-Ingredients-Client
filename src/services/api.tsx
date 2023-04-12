import axios from "axios";
import { Cookies } from 'react-cookie';


const cookies = new Cookies();
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",

});
api.interceptors.request.use(
  (config) => {
    const token = cookies.get('token');
    if (token) {
      console.log(token)
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
