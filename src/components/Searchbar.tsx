"use client";
import React from "react";
import SearchIcon from "../assets/SearchSvg";

const Searchbar = () => {
  return (
    <div className="searchbar_container center_item">
      <form
        action="https://www.google.com/search"
        method="get"
        className="search_bar"
        target="_blank"
      >
        <input type="text" placeholder="search movie" name="q" />
        <button className="center_item" type="submit">
          {" "}
          <SearchIcon className="search_icon" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
