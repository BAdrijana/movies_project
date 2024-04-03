"use client";
import React, { ChangeEvent, useState } from "react";
import SearchIcon from "../assets/SearchSvg";
import useSearchMovie from "../hooks/useSearchMovie";

const Searchbar = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const { searchMovie } = useSearchMovie();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMovieSearch(event.target.value);
  };
  const submitHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    searchMovie(movieSearch);
  };
  return (
    <div className="searchbar_container center_item">
      <form
        action="https://www.google.com/search"
        method="get"
        className="search_bar"
        target="_blank"
      >
        <input
          type="text"
          placeholder="search movie"
          name="q"
          onChange={(e) => handleChange(e)}
        />
        <button
          className="center_item"
          type="submit"
          onClick={(event) => submitHandler(event)}
        >
          {" "}
          <SearchIcon className="search_icon" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
