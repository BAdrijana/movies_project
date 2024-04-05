import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MovieCard from "./MovieCard";
import Searchbar from "./Searchbar";
import useMovies from "../hooks/useMovies";
import { useMoviesStore } from "../store/moviesStore";
import useGenres from "../hooks/useGenres";
import { useGenresStore } from "../store/genresStore";
import Pagination from "./Pagination";
import { useGenreActiveStore } from "../store/genreActiveStore";
const Dashboard = () => {
  const [page, setPage] = useState(1);

  const { getMovies } = useMovies();
  const { getGenres } = useGenres();

  const movies = useMoviesStore((state) => state.movies);
  const genre = useGenresStore((state) => state.genre);
  const genreActive = useGenreActiveStore((state) => state.genreActive);

  useEffect(() => {
    getMovies(page, genreActive);
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
        <div className="movies_container">
          <Pagination
            totalItems={movies?.total_pages}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
