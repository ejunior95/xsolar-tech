import axios from 'axios';

let api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
