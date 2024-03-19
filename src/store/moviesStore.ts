import { create } from "zustand";
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

interface MoviesState {
  movies: Movies[];
}
interface MoviesActions {
  setMovies: (movies: Movies[]) => void;
}
export const useMoviesStore = create<MoviesState & MoviesActions>()((set) => ({
  movies: [],
  setMovies: (result: Movies[]) => set({ movies: [...result] }),
}));
