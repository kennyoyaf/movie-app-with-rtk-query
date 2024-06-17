import React from "react";
import { useGetMoviesQuery } from "../../common/apis/Features/movies/movieApiSlice";

const MovieListing = ({ title }) => {
  console.log({ title });
  const { data, isLoading } = useGetMoviesQuery(title);

  console.log({ data });

  // const { data, isLoading, error } = useGetMovieBySearch(title)

  // console.log({ data })

  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>Error: {error.message}</div>

  // console.log(data)

  return <div>MovieListing</div>;
};

export default MovieListing;
