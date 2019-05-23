import axios from 'axios';
import handleAuthErrors from './interceptors/handle-auth-errors';
import auth from './interceptors/auth';

const instance = axios.create({
  baseURL: 'https://api.trello.com/1',
});

instance.interceptors.request.use(
  auth,
  Promise.reject
);

instance.interceptors.response.use(
  response => response,
  handleAuthErrors
);

export default instance;
