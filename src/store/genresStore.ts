import { create } from "zustand";
export interface Genre {
  id: number;
  name: string;
}

interface GenreState {
  genre: Genre[];
}
interface GenreActions {
  setGenre: (genre: Genre[]) => void;
}
export const useGenresStore = create<GenreState & GenreActions>()((set) => ({
  genre: [],
  setGenre: (result: Genre[]) => set({ genre: [...result] }),
}));
