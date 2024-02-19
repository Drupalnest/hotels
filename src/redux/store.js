import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './reducer';

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});

export default store;
