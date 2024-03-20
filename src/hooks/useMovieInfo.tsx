import { useState } from "react";
import { baseURL } from "../endpoints/baseURL";
import { readToken } from "../endpoints/baseURL";

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

const useMovieInfo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovieInfo = async (
    id: number,
    setMovieData: (arg0: any) => void
  ) => {
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
        `${baseURL}movie/${id}?api_key=0e4c4726fcd671c6d9dd8fb5b6a74b0f`,
        options
      );
      const data = await response.json();
      setMovieData(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    getMovieInfo,
    loading,
    error,
  };
};

export default useMovieInfo;
