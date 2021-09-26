import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import contactsReducer from "./reducer";

const middlware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

const contactsPersistConfig = {
  key: "items",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middlware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };

// redux

// import { createStore, combineReducers } from 'redux';
// import contactsReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());
// export default store;
