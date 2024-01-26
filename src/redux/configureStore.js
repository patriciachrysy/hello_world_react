import { configureStore } from '@reduxjs/toolkit';
import greeting from './greeting/greeting';

const store = configureStore({
  reducer: {
    greeting,
  },
});

export default store;