// // Reducer.js
// import { combineReducers } from "redux";

// import {
//   SET_FILTERED_HOTELS,
//   SET_SEARCH_TERM,
//   SET_SELECTED_HOTEL,
//   SET_HOTEL_DETAILS,
//   SET_CHECK_IN_DATE,
//   SET_CHECK_OUT_DATE,
// } from "./actions";

// const initialHotelState = {
//   searchTerm: "",
//   selectedHotel: null,
//   hotelDetails: null,
//   filteredHotels: [],
// };

// const hotelReducer = (state = initialHotelState, action) => {
//   switch (action.type) {
//     case SET_SEARCH_TERM:
//       return { ...state, searchTerm: action.payload };
//     case SET_SELECTED_HOTEL:
//       return { ...state, selectedHotel: action.payload };
//     case SET_HOTEL_DETAILS:
//       return { ...state, hotelDetails: action.payload };
//     case SET_FILTERED_HOTELS:
//       return {
//         ...state,
//         filteredHotels: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const initialDateState = {
//   checkInDate: null,
//   checkOutDate: null,
// };

// const dateReducer = (state = initialDateState, action) => {
//   switch (action.type) {
//     case SET_CHECK_IN_DATE:
//       return { ...state, checkInDate: action.payload };
//     case SET_CHECK_OUT_DATE:
//       return { ...state, checkOutDate: action.payload };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   hotel: hotelReducer,
//   date: dateReducer,
// });

// export default rootReducer;





// Reducer.js
import { combineReducers } from "redux";
import {
  SET_FILTERED_HOTELS,
  SET_SEARCH_TERM,
  SET_SELECTED_HOTEL,
  SET_HOTEL_DETAILS,
  SET_CHECK_IN_DATE,
  SET_CHECK_OUT_DATE,
  SET_CHECKOUT_DATA,
  SET_CURRENCY,
  SET_EXCHANGE_RATES
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
 
const initialCheckOutState = {
  checkoutData: [],
};
 
const checkoutDataReducer = (state = initialCheckOutState, action) => {
  switch (action.type) {
    case SET_CHECKOUT_DATA:
      return { ...state, checkoutData: action.payload };
 
    default:
      return state;
  }
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
 
const initialCurrencyState = {
  currencyData: { name: "Indian Rupees", symbol: "₹" },
};
 
const currencyReducer = (state = initialCurrencyState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return { ...state, currencyData: action.payload };
    default:
      return state;
  }
};
 
 
const initialExchangeState = {
  exchangeRates: null,
  // ... other initial state properties
};
 
const exchangeReducer = (state = initialExchangeState, action) => {
  switch (action.type) {
    case 'SET_EXCHANGE_RATES':
      return {
        ...state,
        exchangeRates: action.payload,
      };
    // ... other cases
    default:
      return state;
  }
};
 
const rootReducer = combineReducers({
  hotel: hotelReducer,
  date: dateReducer,
  checkoutData: checkoutDataReducer,
  currency: currencyReducer,
  exchangeRates:exchangeReducer,
});
 
export default rootReducer;