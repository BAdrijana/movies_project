import { useState } from "react";
import { baseURL } from "../endpoints/baseURL";
import { readToken } from "../endpoints/baseURL";
import { useMoviesStore } from "../store/moviesStore";

const useGenresMovieList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setMovies } = useMoviesStore((state) => state);

  const getGenresMovieList = async (id: number) => {
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
        `${baseURL}discover/movie?with_genres=${id}`,
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
    getGenresMovieList,
    loading,
    error,
  };
};

export default useGenresMovieList;
