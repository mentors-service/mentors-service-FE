import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');

  config.headers = {
    Authorization: token ? `Bearer ${token}` : '',
  };
  return config;
});
