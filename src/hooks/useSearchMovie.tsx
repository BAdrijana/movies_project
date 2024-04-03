import { useState } from "react";
import { baseURL } from "../endpoints/baseURL";
import { readToken } from "../endpoints/baseURL";
import { useMoviesStore } from "../store/moviesStore";

const useSearchMovie = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setMovies } = useMoviesStore((state) => state);

  const searchMovie = async (movieSearch: string) => {
    setLoading(true);
    setError(null);
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + readToken,
        },
      };
      const response = await fetch(
        `${baseURL}search/movie?api_key=0e4c4726fcd671c6d9dd8fb5b6a74b0f&query=${movieSearch}`,
        options
      );
      const data = await response.json();
      console.log(data);
      setMovies(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    searchMovie,
    loading,
    error,
  };
};

export default useSearchMovie;
