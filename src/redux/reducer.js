import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  bookedRooms: [],
};

const hotelReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('hotel/addToCart', (state, action) => {
      state.cart.push(action.payload);
    })
    .addCase('hotel/bookRoom', (state, action) => {
      state.bookedRooms.push(action.payload);
    });
});

export default hotelReducer;
