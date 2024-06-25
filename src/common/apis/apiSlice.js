import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_URL = "http://www.omdbapi.com/"

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["movies"],
  endpoints: builder => ({})
})
