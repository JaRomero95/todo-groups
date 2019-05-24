import axios from 'axios';
import config from '@/config';
import handleAuthErrors from './interceptors/handle-auth-errors';
import auth from './interceptors/auth';

const instance = axios.create({
  baseURL: config.TRELLO_API_URL,
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
