import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import userReducer from './slice';

const reducers = combineReducers({ user: userReducer });
const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

const persist = persistStore(store);

export { persist, store };
