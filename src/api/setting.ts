import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  config.headers = {
    Authorization: token ? `Bearer ${token}` : '',
  };

  return config;
});
