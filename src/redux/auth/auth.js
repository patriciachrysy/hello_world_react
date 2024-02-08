import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/authService';
import { toast } from 'react-toastify';

const USER_ASYNC_LOGIN = 'authstore/auth/USER_LOGIN';

const USER_LOGIN = 'authstore/auth/USER_LOGIN/fulfilled';

const USER_ASYNC_REGISTER = 'authstore/auth/USER_REGISTER';

const USER_REGISTER = 'authstore/auth/USER_REGISTER/fulfilled';

const LOGOUT_USER = 'authstore/auth/LOGOUT_USER';

const TOGGLE_LOADER = 'authstore/auth/TOGGLE_LOADER';

const initialState = {
  loader: false,
  username: '',
  token: '',
  error: ''
};

export const logUser = createAsyncThunk(
  USER_ASYNC_LOGIN,
  async (data) => {
    try {
        const res = await AuthService.login(data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', data.username);
        window.location.pathname = "/developers"
        toast("Welcome: "+data.username);
        return { loader: false, username: data.username, token: res.token, error: '' };
    }catch(error) {
        console.log(error);
        console.log(error.response?.data?.error);
        return { loader: false, username: '', token: '', error: error.response?.data?.error };
    }
  },
);

export const registerUser = createAsyncThunk(
  USER_ASYNC_REGISTER,
  async (data) => {
    try {
        const res = await AuthService.register(data);
        return { loader: false, username: '', token: '', error: '' };
    }catch(error) {
        console.log(error);
        console.log(error.response?.data?.error);
        return { loader: false, username: '', token: '', error: error.response?.data?.error };
    }
  },
);

export const startLoader = () => ({ type: TOGGLE_LOADER, payload: true });

export const logoutUser = () => ({ type: LOGOUT_USER, payload: initialState });

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    case USER_REGISTER:
        return action.payload;
    case LOGOUT_USER:
        return action.payload;
    case TOGGLE_LOADER:
        return {...state, loader: action.payload};
    default:
      return state;
  }
};

export default auth;
