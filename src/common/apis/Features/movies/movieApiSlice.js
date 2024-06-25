import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../apiSlice";
import { APIKey } from "../../MovieApiKey";

const movieAdapter = createEntityAdapter({});

const initialState = movieAdapter.getInitialState();

export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllMovies: builder.query({
      query: () => ({
        url: `?apikey=${APIKey}&s=all`,
        method: "GET"
      }),
      providesTags: ["Movies"]
    }),
    getMovies: builder.query({
      query: title => ({
        url: `?s=${title}&apikey=${APIKey}`,
        method: "GET"
      }),
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "movies", id: "LIST" },
            ...result.ids.map(id => ({ type: "movies", id }))
          ];
        } else return [{ type: "movies", id: "LIST" }];
      }
    }),
    getMovieById: builder.query({
      query: id => `?i=${id}&apikey=${APIKey}`,
      providesTags: (result, error, id) =>
        result ? [{ type: "Movies", id }] : [{ type: "Movies", id: "LIST" }]
    })
  })
});

export const { useGetAllMoviesQuery, useGetMoviesQuery, useGetMovieByIdQuery } =
  movieApiSlice;
