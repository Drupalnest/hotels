// Reducer.js
import {
  SET_FILTERED_HOTELS,
  SET_SEARCH_TERM,
  SET_SELECTED_HOTEL,
  SET_HOTEL_DETAILS,
} from "./actions";

const initialState = {
  searchTerm: "",
  selectedHotel: null,
  hotelDetails: null,
  filteredHotels: [],
};

const reducer = (state = initialState, action) => {
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

export default reducer;
