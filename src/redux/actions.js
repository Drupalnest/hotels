// actions.js
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SELECTED_HOTEL = 'SET_SELECTED_HOTEL';
export const SET_HOTEL_DETAILS = 'SET_HOTEL_DETAILS';
export const SET_FILTERED_HOTELS='SET_FILTERED_HOTELS'
export const SET_CHECK_IN_DATE='SET_CHECK_IN_DATE'
export const SET_CHECK_OUT_DATE='SET_CHECK_OUT_DATE'

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

export const setSelectedHotel = (hotel) => ({
  type: SET_SELECTED_HOTEL,
  payload: hotel,
});

export const setHotelDetails = (details) => ({
  type: SET_HOTEL_DETAILS,
  payload: details,
});

export const setFilteredHotels = (filteredHotels) => ({
  type: "SET_FILTERED_HOTELS",
  payload: filteredHotels,
});




export const setCheckInDate = (date) => ({
  type: 'SET_CHECK_IN_DATE',
  payload: date,
});

export const setCheckOutDate = (date) => ({
  type: 'SET_CHECK_OUT_DATE',
  payload: date,
});
