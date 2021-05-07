import axios from 'axios';

let api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// api.interceptors.request['Authorization'] = `Bearer ${localStorage.getItem('@SistemaXSolarTech/token')}`;

export default api;