import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses local storage
import { combineReducers } from "redux";
import formSlice from "./slices/formSlice"; // Your slice

// Redux Persist Configuration
const persistConfig = {
  key: "root", // Key for local storage
  storage, // Storage mechanism
};

// Combine reducers if needed
const rootReducer = combineReducers({
  form: formSlice, // Add other slices if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Redux Persist requires this setting
    }),
});

export const persistor = persistStore(store);
