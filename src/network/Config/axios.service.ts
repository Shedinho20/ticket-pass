import axios from 'axios';

export const axiosService = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'prod_url from env' : 'http://localhost:8000'
});
