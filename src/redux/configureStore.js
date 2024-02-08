import { configureStore } from '@reduxjs/toolkit';
import greeting from './greeting/greeting';
import auth from './auth/auth';
import developer from './developer/developer';

const store = configureStore({
  reducer: {
    greeting,
    auth,
    developer
  },
});

export default store;
