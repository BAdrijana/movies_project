import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MovieCard from "./MovieCard";
import Searchbar from "./Searchbar";
import useMovies from "../hooks/useMovies";
import { useMoviesStore } from "../store/moviesStore";
import useGenres from "../hooks/useGenres";
import { useGenresStore } from "../store/genresStore";
const Dashboard = () => {
  const { getMovies } = useMovies();
  const { getGenres } = useGenres();

  const movies = useMoviesStore((state) => state.movies);
  const genre = useGenresStore((state) => state.genre);
  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  return (
    <div className="main_container">
      <div className="sidebar_container">
        <Sidebar genre={genre} />
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
