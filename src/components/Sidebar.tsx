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

  return (
    <div className="aside">
      {genre?.genre.map((item: Genre) => {
        return (
          <div
            key={item.id}
            className="genre_links"
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
