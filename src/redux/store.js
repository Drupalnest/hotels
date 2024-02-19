import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './reducers';

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});

export default store;
