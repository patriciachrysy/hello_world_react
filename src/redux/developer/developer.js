import { createAsyncThunk } from '@reduxjs/toolkit';
import DeveloperService from '../../services/developerService';
import { toast } from 'react-toastify';

const LIST_ASYNC_DEVELOPERS = 'developerStore/developer/LIST_DEVELOPERS';

const LIST_DEVELOPERS = 'developerStore/developer/LIST_DEVELOPERS/fulfilled';

const GET_ASYNC_DEVELOPER = 'developerStore/developer/GET_DEVELOPER';

const GET_DEVELOPER = 'developerStore/developer/GET_DEVELOPER/fulfilled';

const CREATE_ASYNC_DEVELOPER = 'developerStore/developer/CREATE_DEVELOPER';

const CREATE_DEVELOPER = 'developerStore/developer/CREATE_DEVELOPER/fulfilled';

const UPDATE_ASYNC_DEVELOPER = 'developerStore/developer/UPDATE_DEVELOPER';

const UPDATE_DEVELOPER = 'developerStore/developer/UPDATE_DEVELOPER/fulfilled';

const DELETE_ASYNC_DEVELOPER = 'developerStore/developer/DELETE_DEVELOPER';

const DELETE_DEVELOPER = 'developerStore/developer/DELETE_DEVELOPER/fulfilled';

const TOGGLE_LOADER = 'developerStore/developer/TOGGLE_LOADER';

const initialState = {
  loader: false,
  developers: [],
  developer: {},
  error: ''
};

const headers = {
    'Authorization': 'Bearer '+localStorage.getItem('token')
}

export const listDevelopers = createAsyncThunk(
  LIST_ASYNC_DEVELOPERS,
  async () => {
    try {
        const res = await DeveloperService.getDevelopers(headers);
        console.log(res.data);
        return { loader: false, developers: res.data, error: '' };
    }catch(error) {
        console.log(error);
        console.log(error.response?.data?.error);
        return { loader: false, error: error.response?.data?.error };
    }
  },
);

export const loadDeveloperDatas = createAsyncThunk(
  GET_ASYNC_DEVELOPER,
  async (id) => {
    try {
        const res = await DeveloperService.getDeveloper(id, headers);
        return { loader: false, developer: res.data };
    }catch(error) {
        console.log(error);
        console.log(error.response?.data?.error);
        return { loader: false, error: error.response?.data?.error };
    }
  },
);

export const createDeveloperDatas = createAsyncThunk(
  CREATE_ASYNC_DEVELOPER,
  async (data) => {
    try {
        const res = await DeveloperService.createDeveloper(data, headers);
        window.location.pathname = "/"
        return { loader: false };
    }catch(error) {
        console.log(error);
        console.log(error.response?.data?.error);
        return { loader: false, error: error.response?.data?.error };
    }
  },
);

export const updateDeveloperDatas = createAsyncThunk(
  UPDATE_ASYNC_DEVELOPER,
  async (id, data) => {
    try {
        const res = await DeveloperService.updateDeveloper(id, data, headers);
        window.location.pathname = "/"
        return { loader: false };
    }catch(error) {
        console.log(error);
        console.log(error.response?.data?.error);
        return { loader: false, error: error.response?.data?.error };
    }
  },
);

export const deleteDeveloper = createAsyncThunk(
  DELETE_ASYNC_DEVELOPER,
  async (id) => {
    try {
        const res = await DeveloperService.deleteDeveloper(id, headers);
        window.location.pathname = "/"
        return { loader: false };
    }catch(error) {
        console.log(error);
        console.log(error.response?.data?.error);
        return { loader: false, error: error.response?.data?.error };
    }
  },
);

export const startLoader = () => ({ type: TOGGLE_LOADER, payload: true });

const developer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_DEVELOPERS:
      return {...state, ...action.payload};
    case GET_DEVELOPER:
        return {...state, ...action.payload};
    case CREATE_DEVELOPER:
        return {...state, ...action.payload};
    case UPDATE_DEVELOPER:
        return {...state, ...action.payload};
    case DELETE_DEVELOPER:
        return {...state, ...action.payload};
    case TOGGLE_LOADER:
        return {...state, loader: action.payload};
    default:
      return state;
  }
};

export default developer;
