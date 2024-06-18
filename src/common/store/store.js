import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { movieApiSlice } from "../apis/MovieApi"

export const store = configureStore({
  reducer: {
    [movieApiSlice.reducerPath]: movieApiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(movieApiSlice.middleware)
})
setupListeners(store.dispatch)
