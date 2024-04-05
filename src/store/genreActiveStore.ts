import { create } from "zustand";

interface ActiveGenreState {
  genreActive: number;
}
interface ActiveGenreActions {
  setGenreActive: (genreActive: number) => void;
}
export const useGenreActiveStore = create<
  ActiveGenreState & ActiveGenreActions
>()((set) => ({
  genreActive: 0,
  setGenreActive: (genre) => set({ genreActive: genre }),
}));
