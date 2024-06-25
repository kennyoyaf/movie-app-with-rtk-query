import React from "react";
import { useGetAllMoviesQuery } from "../../common/apis/Features/movies/movieApiSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const { data, isLoading } = useGetAllMoviesQuery();
  return (
    <>
      <MovieCard data={data} isLoading={isLoading} />
    </>
  );
};

export default MovieListing;
