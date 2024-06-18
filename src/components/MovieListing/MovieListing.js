import React from "react"
import { useGetMovieBySearch } from "../../common/apis/MovieApi"

const MovieListing = ({ title }) => {
  console.log({ title })

  const { data, isLoading, error } = useGetMovieBySearch(title)

  console.log({ data })

  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>Error: {error.message}</div>

  // console.log(data)

  return <div>MovieListing</div>
}

export default MovieListing
