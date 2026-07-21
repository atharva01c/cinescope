import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import MovieGrid from "../components/MovieGrid";
import type { Movie, Genre } from "../types";
import { getGenres, discoverMovies } from "../services/api";
import "./movies.css";

const pageVariants: Variants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.3, ease: "easeIn" } }
};

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>("popularity.desc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch genres once on mount
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (err) {
        console.error("Failed to load genres:", err);
      }
    };
    fetchGenres();
  }, []);

  // Fetch movies when genre, sort, or page changes
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await discoverMovies(selectedGenre || undefined, sortBy, currentPage);

        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages, 500)); // TMDB limits to 500
      } catch (err) {
        console.error("Failed to load movies:", err);
        setError("Unable to load movies. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [selectedGenre, sortBy, currentPage]);

  const handleGenreClick = (genreId: number | null) => {
    setSelectedGenre(genreId);
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      className="movies-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <header className="movies-page-header">
        <h1 className="movies-title">Discover</h1>
      </header>

      <div className="movies-layout">
        {/* Sidebar Controls */}
        <aside className="movies-controls">
          <div className="control-group">
            <h3>Sort By</h3>
            <select value={sortBy} onChange={handleSortChange}>
              <option value="popularity.desc">Popularity (High to Low)</option>
              <option value="vote_average.desc">Rating (High to Low)</option>
              <option value="release_date.desc">Release Date (Newest first)</option>
            </select>
          </div>

          <div className="control-group">
            <h3>Genres</h3>
            <ul className="genres-list">
              <li>
                <button
                  className={selectedGenre === null ? "active" : ""}
                  onClick={() => handleGenreClick(null)}
                >
                  All Genres
                </button>
              </li>
              {genres.map((genre) => (
                <li key={genre.id}>
                  <button
                    className={selectedGenre === genre.id ? "active" : ""}
                    onClick={() => handleGenreClick(genre.id)}
                  >
                    {genre.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Movies Grid and Pagination */}
        <main className="movies-main">
          {loading ? (
            <div className="movie-grid">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="skeleton-card">
                  <div className="skeleton-box skeleton-card-poster"></div>
                  <div className="skeleton-box skeleton-card-title"></div>
                  <div className="skeleton-box skeleton-card-year"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="movies-error">{error}</div>
          ) : (
            <>
              <MovieGrid movies={movies} />

              {movies.length > 0 && totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-btn"
                  >
                    &laquo; Prev
                  </button>
                  <span className="pagination-info">
                    Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-btn"
                  >
                    Next &raquo;
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </motion.div>
  );
}
