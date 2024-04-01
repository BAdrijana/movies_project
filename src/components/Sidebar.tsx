"use client";

import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="aside">
      {genre?.genre.map((item: Genre) => {
        return <div className="genre_links">{item.name}</div>;
      })}
    </div>
  );
};

export default Sidebar;
