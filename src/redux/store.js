import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactListSliceReducer } from './contactListSlice';
import { authSlice } from './authSlice';
import { filterSliceReducer } from './filterSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    contactList: contactListSliceReducer,
    filter: filterSliceReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// selectors
export const getUsername = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getToken = state => state.auth.token;
export const getIsLogged = state => state.auth.isLogged;
export const getIsfetchCurrentUser = state => state.auth.isfetchCurrentUser;

export const selectContactList = state => state.contactList.contactList;
export const selectIsLoading = state => state.contactList.isLoading;
export const selectError = state => state.contactList.error;