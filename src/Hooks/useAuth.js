import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import {
  loginFailure,
  loginStarted,
  loginSuccess,
  signInFailure,
  signInStarted,
  signInSuccess,
} from '../Redux/userSlice';

import { login, signup } from '../Services/auth';
import useStorage from './useStorage';

function useAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { storeInLocalStorage, clearLocalStorage } = useStorage();

  const handleLogin = useCallback(
    async (body) => {
      dispatch(loginStarted());
      try {
        await login(body);
        dispatch(loginSuccess());
        //store token in local storage
      } catch (error) {
        dispatch(loginFailure());
      }
    },
    [dispatch]
  );

  const handleSignIn = useCallback(
    async (body) => {
      dispatch(signInStarted());
      try {
        await signup(body);
        dispatch(signInSuccess());
        //store token in local storage
      } catch (error) {
        dispatch(signInFailure());
      }
    },
    [dispatch]
  );

  const handleLogout = () => {
    clearLocalStorage();
    navigate('/login');
  };

  return { handleLogin, handleSignIn, handleLogout };
}
export default useAuth;
