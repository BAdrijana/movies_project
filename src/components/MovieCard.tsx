"use client";
import React from "react";
import { MovieCardProps } from "../types";

const MovieCard = ({ movie }: MovieCardProps) => {
  console.log(movie, "kdjns", typeof movie);
  return (
    <div className="card_container center_item">
      <div className="card center_item">
        <div className="movie_image_thumbnail_container">
          <img
            className="movie_image_thumbnail"
            src={`http://image.tmdb.org/t/p/w200/` + movie.poster_path}
            alt="movie_image_thumbnail"
          />
        </div>

        <div className="movie_info_card_container">
          <div className="movie_title_card">{movie.title}</div>
          <div className="movie_genre_card">Genre</div>
          <div className="movie_aditonal_info_card">
            <div className="movie_ratings_card">{movie.popularity}</div>
            <div className="movie_runtime_card">Runtime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
