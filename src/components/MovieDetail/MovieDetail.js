import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../common/apis/Features/movies/movieApiSlice";
import { CiStar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const { data, isLoading, error } = useGetMovieByIdQuery(imdbID);
  console.log(data);
  const [showFullPlot, setShowFullPlot] = useState(false);
  const togglePlot = () => setShowFullPlot(!showFullPlot);

  const getShortPlot = plot => {
    const maxLength = 100; // Define the maximum length for the short plot
    if (plot.length <= maxLength) return plot;
    return `${plot.substring(0, maxLength)}...`;
  };
  return (
    <div className="movie-detail">
      {data && (
        <div className="movie-detail-wrapper">
          <div
            className="movie-detail-image"
            style={{ backgroundImage: `url(${data.Poster})` }}
          >
            <img src={data.Poster} alt={data.Title} />
            <div className="rating">
              <CiStar className="star" />
              <p>{data.imdbRating}</p>
            </div>
          </div>
          <div className="mini-wrapper">
            <div className="movie-detail-text">
              <h1>{data.Title}</h1>
              <h6>{data.Year}</h6>
            </div>
            <div className="Genre">{data.Genre}</div>
            <div className="actors">{data.Actors}</div>
            <div className="awards">{data.Awards}</div>
            <div className="plot">
              <p>
                {showFullPlot ? data.Plot : getShortPlot(data.Plot)}
                {data.Plot.length > 100 && (
                  <span onClick={togglePlot} className="see-more">
                    {showFullPlot ? (
                      <>
                        See Less <FaAngleUp />
                      </>
                    ) : (
                      <>
                        See More <FaAngleDown />
                      </>
                    )}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
