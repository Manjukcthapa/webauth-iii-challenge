import axios from './node_modules/axios';

axios.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem('jwt');

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
