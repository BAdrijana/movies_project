import { useState } from "react";
import { baseURL } from "../endpoints/baseURL";
import { readToken } from "../endpoints/baseURL";
import { useGenresStore } from "../store/genresStore";

const useGenres = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { setMovies } = useMoviesStore((state) => state);
  const setGenres = useGenresStore((state) => state.setGenre);

  const getGenres = async () => {
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
        `${baseURL}genre/movie/list?language=en`,
        options
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    getGenres,
    loading,
    error,
  };
};

export default useGenres;
