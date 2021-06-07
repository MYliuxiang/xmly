import axios from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL = "http://172.16.20.22:3000";
axios.defaults.timeout = 30;
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log('--error', error);
    return error;
  },
);

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
    // return {error:error};
  },
);
