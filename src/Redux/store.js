// import redux and persist plugins
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'reduxjs-toolkit-persist/es/constants';
import persistStore from 'reduxjs-toolkit-persist/es/persistStore';

// import reducers

import { REDUX_PERSIST_KEY } from '../config';
const persistConfig = {
  key: 'cash_flow()',
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    //  cart: CartReducer,
    //  productsList: productListReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});
const persistedStore = persistStore(store);
export { store, persistedStore };
