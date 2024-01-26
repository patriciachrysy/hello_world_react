import { createAsyncThunk } from '@reduxjs/toolkit';
import GreetingService from '../../services/greetingService';

const RETRIEVE_ASYNC_GREETING = 'greetingstore/greeting/RETRIVE_GREETING';

const RETRIEVE_GREETING = 'greetingstore/greeting/RETRIVE_GREETING/fulfilled';

const initialState = {
    content: "loading..."
};

export const retrieveGreeting = createAsyncThunk(
  RETRIEVE_ASYNC_GREETING,
  async () => {
    const res = await GreetingService.getGreeting();
    let randomGreeting = {};
    console.log(res);
    if (res.data) {
        randomGreeting = res.data;
    }
    return randomGreeting;
  },
);

const greeting = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greeting;