// // actions.js
// export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
// export const SET_SELECTED_HOTEL = 'SET_SELECTED_HOTEL';
// export const SET_HOTEL_DETAILS = 'SET_HOTEL_DETAILS';
// export const SET_FILTERED_HOTELS='SET_FILTERED_HOTELS'
// export const SET_CHECK_IN_DATE='SET_CHECK_IN_DATE'
// export const SET_CHECK_OUT_DATE='SET_CHECK_OUT_DATE'

// export const setSearchTerm = (searchTerm) => ({
//   type: SET_SEARCH_TERM,
//   payload: searchTerm,
// });

// export const setSelectedHotel = (hotel) => ({
//   type: SET_SELECTED_HOTEL,
//   payload: hotel,
// });

// export const setHotelDetails = (details) => ({
//   type: SET_HOTEL_DETAILS,
//   payload: details,
// });

// export const setFilteredHotels = (filteredHotels) => ({
//   type: "SET_FILTERED_HOTELS",
//   payload: filteredHotels,
// });




// export const setCheckInDate = (date) => ({
//   type: 'SET_CHECK_IN_DATE',
//   payload: date,
// });

// export const setCheckOutDate = (date) => ({
//   type: 'SET_CHECK_OUT_DATE',
//   payload: date,
// });





// actions.js
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SELECTED_HOTEL = 'SET_SELECTED_HOTEL';
export const SET_HOTEL_DETAILS = 'SET_HOTEL_DETAILS';
export const SET_FILTERED_HOTELS='SET_FILTERED_HOTELS'
export const SET_CHECK_IN_DATE='SET_CHECK_IN_DATE'
export const SET_CHECK_OUT_DATE='SET_CHECK_OUT_DATE'
export const SET_CHECKOUT_DATA='SET_CHECKOUT_DATA'
export const SET_CURRENCY='SET_CURRENCY'
export const SET_EXCHANGE_RATES='SET_EXCHANGE_RATES'
 export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';


 
 
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
 
 
 
 
 
 
 
 
 
export const setCheckOutData = (checkoutData) => ({
  type: 'SET_CHECKOUT_DATA',
  payload: checkoutData,
});
 
 
 
export const setCurrencyData = (currencyData) => ({
  type: SET_CURRENCY,
  payload: currencyData,
});
 
 
 
export const setExchangeRates = (exchangeRates) => ({
  type: 'SET_EXCHANGE_RATES',
  payload: exchangeRates,
});



// actions.js
export const incrementRooms = () => ({
  type: 'INCREMENT_ROOMS',
});

export const decrementRooms = () => ({
  type: 'DECREMENT_ROOMS',
});

export const incrementAdults = () => ({
  type: 'INCREMENT_ADULTS',
});

export const decrementAdults = () => ({
  type: 'DECREMENT_ADULTS',
});

export const incrementChildren = () => ({
  type: 'INCREMENT_CHILDREN',
});

export const decrementChildren = () => ({
  type: 'DECREMENT_CHILDREN',
});



// actions.js
export const setRoomCount = (count) => ({
  type: 'SET_ROOM_COUNT',
  payload: count,
});

export const setAdultCount = (count) => ({
  type: 'SET_ADULT_COUNT',
  payload: count,
});

export const setChildrenCount = (count) => ({
  type: 'SET_CHILDREN_COUNT',
  payload: count,
});




// Action creators
export const setFirstName = (firstName) => ({
  type: SET_FIRST_NAME,
  payload: firstName,
});

export const setLastName = (lastName) => ({
  type: SET_LAST_NAME,
  payload: lastName,
});