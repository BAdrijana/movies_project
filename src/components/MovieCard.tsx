"use client";
import React from "react";

const MovieCard = () => {
  return (
    <div className="card_container center_item">
      <div className="card center_item">
        <div className="movie_image_thumbnail_container">
          <img
            className="movie_image_thumbnail"
            src="#"
            alt="movie_image_thumbnail"
          />
        </div>
        <div className="movie_info_card_container">
          <div className="movie_title_card">MOVIE TITLE</div>
          <div className="movie_genre_card">Genre</div>
          <div className="movie_aditonal_info_card">
            <div className="movie_ratings_card">Ratings</div>
            <div className="movie_runtime_card">Runtime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
