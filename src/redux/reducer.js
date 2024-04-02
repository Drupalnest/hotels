

// Reducer.js
import { combineReducers } from "redux";
//import { persistReducer } from "redux-persist";
//import localforage from "localforage";

import {
  SET_FILTERED_HOTELS,
  SET_SEARCH_TERM,
  SET_SELECTED_HOTEL,
  SET_HOTEL_DETAILS,
  SET_CHECK_IN_DATE,
  SET_CHECK_OUT_DATE,
  SET_CHECKOUT_DATA,
  SET_CURRENCY,
  //SET_EXCHANGE_RATES,
  SET_FIRST_NAME, 
  SET_LAST_NAME
} from "./actions";






const initialHotelState = {
  searchTerm: "",
  selectedHotel: [],
  hotelDetails: [],
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



const formatDate = (date) => {
  if (!date || typeof date !== 'object') {
    return ''; // Return empty string if date is null or not an object
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}/${day}/${year}`;
};

const today = new Date();
today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison

const initialDateState = {
  checkInDate: today,
  checkOutDate: tomorrow,
  formattedCheckInDate: formatDate(today),
  formattedCheckOutDate: formatDate(tomorrow),
};

const dateReducer = (state = initialDateState, action) => {
  switch (action.type) {
    case SET_CHECK_IN_DATE:
      const formattedCheckInDate = formatDate(action.payload);
      return { ...state, checkInDate: action.payload, formattedCheckInDate };
    case SET_CHECK_OUT_DATE:
      const formattedCheckOutDate = formatDate(action.payload);
      return { ...state, checkOutDate: action.payload, formattedCheckOutDate };
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
    case "SET_EXCHANGE_RATES":
      return {
        ...state,
        exchangeRates: action.payload,
      };
    // ... other cases
    default:
      return state;
  }
};

// reducers.js
const initialCountState = {
  rooms: 1,
  adults: 1,
  children: 0,
};

const countRoomsReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case "INCREMENT_ROOMS":
      return { ...state, rooms: state.rooms + 1 };
    case "DECREMENT_ROOMS":
      return { ...state, rooms: state.rooms > 1 ? state.rooms - 1 : 1 };
    case "INCREMENT_ADULTS":
      return { ...state, adults: state.adults + 1 };
    case "DECREMENT_ADULTS":
      return { ...state, adults: state.adults > 1 ? state.adults - 1 : 1 };
    case "INCREMENT_CHILDREN":
      return { ...state, children: state.children + 1 };
    case "DECREMENT_CHILDREN":
      return {
        ...state,
        children: state.children > 0 ? state.children - 1 : 0,
      };
      case 'SET_ROOM_COUNT':
        return { ...state, rooms: action.payload };
      case 'SET_ADULT_COUNT':
        return { ...state, adults: action.payload };
      case 'SET_CHILDREN_COUNT':
        return { ...state, children: action.payload };
    default:
      return state;
  }
};



const initialNameState = {
  firstName: '',
  lastName: '',
};

const nameReducer = (state = initialNameState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    default:
      return state;
  }
};



// const rootPersistConfig = {
//   key: 'root',
//   storage: localforage,
//   //blacklist: ['form']
// };

const rootReducer = combineReducers({
  hotel: hotelReducer,
  date: dateReducer,
  checkoutData: checkoutDataReducer,
  currency: currencyReducer,
  exchangeRates: exchangeReducer,
  countData: countRoomsReducer,
  name:nameReducer,
});

 export default rootReducer;
//export default persistReducer(rootPersistConfig, rootReducer);

