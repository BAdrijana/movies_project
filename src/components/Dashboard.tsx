"use client";
import React from "react";
import Sidebar from "./Sidebar";
import MovieCard from "./MovieCard";
import Searchbar from "./Searchbar";
const Dashboard = () => {
  return (
    <div className="main_container">
      <div className="sidebar_container">
        <Sidebar />
      </div>

      <div className="dashboard_container">
        <div>
          <Searchbar />
        </div>
        <div className="movies_container">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
