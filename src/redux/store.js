// // store.js
// import { createStore, combineReducers } from 'redux';
// import reducer from './reducer';

// // Combine reducers if you have multiple reducers
// const rootReducer = combineReducers({
//   // Add other reducers here if needed
//   hotel: reducer,
// });

// // Create the Redux store
// const store = createStore(rootReducer);

// export default store;



// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import reducer from './reducer';
// import dateReducer from './dateReducer'; 


// // Combine reducers if you have multiple reducers
// const rootReducer = combineReducers({
//   // Add other reducers here if needed
//   hotel: reducer,
//   date: dateReducer,
// });

// // Apply middleware for Redux DevTools Extension
// const middleware = composeWithDevTools(applyMiddleware(/* any middleware you want to add */));

// // Create the Redux store with the combined reducer and DevTools Extension
// const store = createStore(rootReducer, middleware);

// export default store;




import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer'; // Updated import

// Apply middleware for Redux DevTools Extension
const middleware = composeWithDevTools(applyMiddleware(/* any middleware you want to add */));

// Create the Redux store with the combined reducer and DevTools Extension
const store = createStore(rootReducer, middleware);

export default store;
