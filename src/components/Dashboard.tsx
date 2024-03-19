import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MovieCard from "./MovieCard";
import Searchbar from "./Searchbar";
import useMovies from "../hooks/useMovies";
import { useMoviesStore } from "../store/moviesStore";
export interface Movies {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
const Dashboard = () => {
  const { getMovies, loading } = useMovies();

  // const movies = useMoviesStore((state) => state.movies);
  const [movies, setMovies] = useState<Movies>();
  useEffect(() => {
    getMovies(setMovies);
  }, []);

  return (
    <div className="main_container">
      <div className="sidebar_container">
        <Sidebar />
      </div>

      <div className="dashboard_container">
        <div>
          <Searchbar />
        </div>
        <div className="movies_container">
          {movies?.results.map((results) => (
            <MovieCard movie={results} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
