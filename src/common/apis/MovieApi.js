import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { APIKey } from "./MovieApiKey"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://www.omdbapi.com/"
})

export const movieApiSlice = createApi({
  reducerPath: "movieApiSlice",
  baseQuery: baseQuery,
  tagTypes: ["movies"],
  endpoints: builder => ({
    getMovieBySearch: builder.query({
      query: title => `?s=${title}&apikey=${APIKey}`
    }),
    providesTags: (result, error, title) =>
      result?.Search
        ? [{ type: "Movies", id: title }]
        : [{ type: "Movies", id: "LIST" }]
  })
})

export const { useGetMovieBySearch } = movieApiSlice
