"use client";

import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { Link } from "react-router-dom";
import useGenresMovieList from "../hooks/useGenresMovieList";
import { useGenreActiveStore } from "../store/genreActiveStore";

interface Link {
  url: string;
  name: string;
  canAccess: boolean;
}
export interface Genre {
  id: number;
  name: string;
}
export interface Genres {
  genre: Genre[];
}
const Sidebar = (genre: Genres) => {
  const { getGenresMovieList } = useGenresMovieList();
  const setGenreActive = useGenreActiveStore((state) => state.setGenreActive);
  const genreActive = useGenreActiveStore((state) => state.genreActive);

  return (
    <div className="aside">
      {genre?.genre.map((item: Genre) => {
        return (
          <div
            key={item.id}
            className={
              genreActive == item.id
                ? "active_genre genre_links"
                : "genre_links"
            }
            onClick={() => {
              getGenresMovieList(item.id);
              setGenreActive(item.id);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
