import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useMoviesStore } from "../store/moviesStore";
import useMovies from "../hooks/useMovies";
import { useGenreActiveStore } from "../store/genreActiveStore";
interface PaginationProps {
  totalItems: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
const Pagination = ({ totalItems, page, setPage }: PaginationProps) => {
  const [paginationNumbers, setPaginationNumbers] = useState<number[]>([1]);

  const movies = useMoviesStore((state) => state.movies);
  const genreActive = useGenreActiveStore((state) => state.genreActive);

  useEffect(() => {
    const totalPages = totalItems;
    const currentPage = movies.page;

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    if (currentPage + 1 >= totalPages) {
      startPage = Math.max(1, totalPages - 2);
      endPage = totalPages;
    }
    setPaginationNumbers(
      Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
    );
  }, [movies]);
  const { getMovies } = useMovies();
  return (
    <div className="pagination center_item">
      <div className="pagination_items center_item">
        <button
          className="btn-nav left-btn"
          onClick={() => {
            setPage(page - 1);
            getMovies(page - 1, genreActive);
          }}
          disabled={movies.page >= totalItems}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="left-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <ul className="page-numbers">
          {paginationNumbers.map((el: number) => (
            <li key={el}>
              <button
                className={page == el ? "btn-page btn-selected" : "btn-page"}
                onClick={() => {
                  setPage(page + 1);
                  getMovies(page + 1, genreActive);
                }}
              >
                {el}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="btn-nav right-btn"
          onClick={() => {
            setPage(page + 1);
            getMovies(page + 1, genreActive);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="right-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
