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
// import dateReducer from './reducer'; 


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




// // store.js
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import rootReducer from "./reducers";

// // Redux Persist configuration
// const persistConfig = {
//   key: "root",
//   storage,
//   // whitelist: ['hotel'], // optional: specify which reducers to persist
// };

// // Create persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create Redux store
// const middleware = composeWithDevTools(applyMiddleware(/* any middleware you want to add */));
// const store = createStore(persistedReducer, middleware);
// const persistor = persistStore(store);

// export { store, persistor };




// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducer';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// // Apply middleware for Redux DevTools Extension
// const middleware = composeWithDevTools(applyMiddleware(/* any middleware you want to add */));

// // Create the Redux store with the combined reducer and DevTools Extension
// const store = createStore(rootReducer, middleware);

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create the Redux store
// const storeWithPersistor = createStore(persistedReducer);
// const persistor = persistStore(storeWithPersistor);

// export { storeWithPersistor as store, persistor };

