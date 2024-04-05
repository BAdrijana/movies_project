"use client";
import { useEffect, useState } from "react";
import React from "react";
import { MovieCardProps } from "../types";
import MovieModal from "./MovieModal";
import useMovieInfo from "../hooks/useMovieInfo";
import { useModalStore } from "../store/modalStore";
import { useGenresStore } from "../store/genresStore";

export interface MovieInfo {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
const MovieCard = ({ movie }: MovieCardProps) => {
  const { getMovieInfo, loading } = useMovieInfo();
  const genre = useGenresStore((state) => state.genre);

  const [movieData, setMovieData] = useState<MovieInfo>();
  const [movieGenres, setMovieGenres] = useState<Genre[]>();

  const getMovie = () => {
    getMovieInfo(movie.id, setMovieData);
  };
  const { toggleShow, show } = useModalStore((state) => state);
  useEffect(() => {
    document.body.style.overflowY = "auto";
    setMovieData(undefined);
  }, [show]);
  useEffect(() => {
    setMovieData(undefined);
  }, []);
  useEffect(() => {
    const movie_genre_card = genre.filter((item) =>
      movie.genre_ids.includes(item.id)
    );
    setMovieGenres(movie_genre_card);
  }, [movie, genre]);
  return (
    <div
      key={movie.id}
      className="card_container center_item"
      onClick={() => {
        getMovie();
        toggleShow();
      }}
    >
      <div className="card center_item">
        <div className="movie_image_thumbnail_container">
          <img
            className="movie_image_thumbnail"
            src={`http://image.tmdb.org/t/p/w200/` + movie.poster_path}
            alt="movie_image_thumbnail"
          />
        </div>

        <div className="movie_info_card_container">
          <div className="movie_title_card">
            <span className="info-card-title">Title: </span>
            {movie.title}
          </div>

          <div className="movie_genre_card">
            <span className="info-card-title">Genre: </span>
            {movieGenres?.map((item, i) => {
              return (
                <span key={item.id} className="movie_genre_item">
                  {item.name}
                </span>
              );
            })}
          </div>
          {/* <div className="movie_aditonal_info_card">
            <div className="movie_ratings_card">{movie.popularity}</div>
            <div className="movie_runtime_card">Runtime</div>
          </div> */}
        </div>
      </div>

      {show ? movieData && <MovieModal movie={movieData} /> : null}
    </div>
  );
};

export default MovieCard;
