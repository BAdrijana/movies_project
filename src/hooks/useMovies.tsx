import { useState } from "react";
import { baseURL } from "../endpoints/baseURL";
import { readToken } from "../endpoints/baseURL";
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

const useMovies = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setMovies } = useMoviesStore((state) => state);

  const getMovies = async (page: number, genre: number) => {
    setLoading(true);
    setError(null);
    let with_genres: string = "";
    if (genre) with_genres = `&with_genres=${genre}`;

    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + readToken,
        },
      };

      const response = await fetch(
        `${baseURL}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc${with_genres}`,
        options
      );
      const data = await response.json();
      setMovies(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    getMovies,
    loading,
    error,
  };
};

export default useMovies;
