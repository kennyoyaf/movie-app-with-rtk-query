// import { configureStore } from "@reduxjs/toolkit"
// import { setupListeners } from "@reduxjs/toolkit/query"
// import { movieApiSlice } from "../apis/MovieApi"

// export const store = configureStore({
//   reducer: {
//     [movieApiSlice.reducerPath]: movieApiSlice.reducer
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(movieApiSlice.middleware)
// })
// setupListeners(store.dispatch)

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../apis/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
