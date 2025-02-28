import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  whitelist: ['contacts'],
}
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistedContactsReducer = persistReducer(persistConfig, rootReducer);
export const store  = configureStore({
reducer: persistedContactsReducer,
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);