"use client";

import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { Link } from "react-router-dom";
import useGenresMovieList from "../hooks/useGenresMovieList";

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

  return (
    <div className="aside">
      {genre?.genre.map((item: Genre) => {
        return (
          <div
            className="genre_links"
            onClick={() => getGenresMovieList(item.id)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
