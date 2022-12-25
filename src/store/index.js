import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import authReducer from './authSlice';

const persistAuth = {
  key: 'root',
  storage,
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuth, authReducer),
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
