import axios from 'axios';

const api = axios.create({
  baseURL: 'https://isaeleo-backend.herokuapp.com',
});

export default api;
