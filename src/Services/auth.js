import axios from 'axios';
import { LOGIN_URL, SIGNUP_URL } from '../Utils/constants';

export const login = ({ body }) => {
  return axios.post(LOGIN_URL, body);
};

export const signup = (body) => {
  return axios.post(SIGNUP_URL, body);
};
