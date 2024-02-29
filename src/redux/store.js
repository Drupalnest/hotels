// store.js
import { createStore, combineReducers } from 'redux';
import reducer from './reducer';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  // Add other reducers here if needed
  hotel: reducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
