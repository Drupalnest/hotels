// Reducer.js
import { combineReducers } from "redux";
import {
  SET_FILTERED_HOTELS,
  SET_SEARCH_TERM,
  SET_SELECTED_HOTEL,
  SET_HOTEL_DETAILS,
  SET_CHECK_IN_DATE,
  SET_CHECK_OUT_DATE,
} from "./actions";

const initialHotelState = {
  searchTerm: "",
  selectedHotel: null,
  hotelDetails: null,
  filteredHotels: [],
};

const hotelReducer = (state = initialHotelState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SET_SELECTED_HOTEL:
      return { ...state, selectedHotel: action.payload };
    case SET_HOTEL_DETAILS:
      return { ...state, hotelDetails: action.payload };
    case SET_FILTERED_HOTELS:
      return {
        ...state,
        filteredHotels: action.payload,
      };
    default:
      return state;
  }
};

const initialDateState = {
  checkInDate: null,
  checkOutDate: null,
};

const dateReducer = (state = initialDateState, action) => {
  switch (action.type) {
    case SET_CHECK_IN_DATE:
      return { ...state, checkInDate: action.payload };
    case SET_CHECK_OUT_DATE:
      return { ...state, checkOutDate: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  hotel: hotelReducer,
  date: dateReducer,
});

export default rootReducer;
