import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../apiSlice";
import { APIKey } from "../../MovieApiKey";

const movieAdapter = createEntityAdapter({});

const initialState = movieAdapter.getInitialState();

export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (title) => ({
        url: `?s=${title}&apikey=${APIKey}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "movies", id: "LIST" },
            ...result.ids.map((id) => ({ type: "movies", id })),
          ];
        } else return [{ type: "movies", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetMoviesQuery } = movieApiSlice;
