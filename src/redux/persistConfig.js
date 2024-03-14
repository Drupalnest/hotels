import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can blacklist certain reducers if you don't want to persist their state
  blacklist: ['blacklistedReducer'],
  // Optionally, you can whitelist certain reducers if you only want to persist their state
  // whitelist: ['whitelistedReducer'],
};

export default persistConfig;
