import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../apis/apiSlice";
import darkModeReducer from "../apis/Features/darkModeSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    darkMode: darkModeReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
