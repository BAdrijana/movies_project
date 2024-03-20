import React, { useEffect } from "react";
import { MovieCardModalProps } from "../types";
import { useModalStore } from "../store/modalStore";
const MovieModal = ({ movie }: MovieCardModalProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "hidden";
  }, []);
  return (
    <div className="movie_modal">
      <div className="close_modal">x</div>
      <div className="movie_modal_container">
        <div className="movie_img">
          <img
            src={`http://image.tmdb.org/t/p/w200/` + movie.poster_path}
            alt=""
          />
        </div>
        <div className="movie_info_modal">
          <div className="movie_title">Title: {movie.original_title}</div>
          <div className="movie_geners">
            {movie.genres.map((item) => {
              return (
                <div className="movie_genre" key={item.id}>
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className="movie_main_info">
            <div className="movie_language movie_info_p">
              Language:
              {movie.spoken_languages.map((item) => {
                return (
                  <span className="movie_lang" key={item.iso_639_1}>
                    {item.name}
                  </span>
                );
              })}
            </div>
            <div className=" movie_info_p">
              Runtime: <span>{movie.runtime}min</span>
            </div>
            <div className=" movie_info_p">
              imdb_id: <span>{movie.imdb_id}</span>
            </div>
            <div className=" movie_info_p">
              Date: <span>{movie.release_date}</span>
            </div>
          </div>

          <p className="movie_overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
