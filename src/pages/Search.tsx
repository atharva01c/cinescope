import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import type { Movie, Genre } from "../types";
import { searchMovies, getGenres } from "../services/api";
import MovieGrid from "../components/MovieGrid";
import "./search.css";

const pageVariants: Variants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const POPULAR_SEARCHES = [
  "Avengers",
  "Batman",
  "Star Wars",
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Joker",
  "Spider-Man",
];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL-driven state
  const query = searchParams.get("q") || "";
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const genreParam = searchParams.get("genre")
    ? parseInt(searchParams.get("genre")!, 10)
    : null;
  const sortParam = searchParams.get("sort") || "popularity.desc";

  // Local search input (may differ from committed query)
  const [searchInput, setSearchInput] = useState(query);

  // Data state
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setSearchInput(query);
  }, [query]);

  useEffect(() => {
    getGenres()
      .then(setGenres)
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setMovies([]);
      setTotalResults(0);
      setTotalPages(1);
      return;
    }

    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await searchMovies(query, pageParam);
        // Apply genre filter client-side when API doesn't support it in search
        const filtered = genreParam
          ? data.results.filter(
              (m: Movie) => (m as any).genre_ids?.includes(genreParam) ?? true,
            )
          : data.results;
        setMovies(filtered);
        setTotalResults(data.total_pages * 20); // approximate
        setTotalPages(Math.min(data.total_pages, 500));
      } catch (err) {
        console.error("Search failed:", err);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, pageParam, genreParam]);

  // Debounced search: commits query to URL after 500ms of no typing
  const commitSearch = useCallback(
    (value: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        if (value.trim() === "") {
          setSearchParams({});
        } else {
          setSearchParams({ q: value, page: "1", sort: sortParam });
        }
      }, 400);
    },
    [sortParam, setSearchParams],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchInput(val);
    commitSearch(val);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (searchInput.trim() === "") return;
    setSearchParams({ q: searchInput, page: "1", sort: sortParam });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ q: query, page: "1", sort: e.target.value });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setSearchParams({ q: query, page: String(newPage), sort: sortParam });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePopularSearch = (term: string) => {
    setSearchInput(term);
    setSearchParams({ q: term, page: "1", sort: sortParam });
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSearchParams({});
    setMovies([]);
  };

  const getPaginationRange = () => {
    const delta = 2;
    const range: (number | "...")[] = [];
    const left = Math.max(1, pageParam - delta);
    const right = Math.min(totalPages, pageParam + delta);

    if (left > 1) {
      range.push(1);
      if (left > 2) range.push("...");
    }
    for (let i = left; i <= right; i++) range.push(i);
    if (right < totalPages) {
      if (right < totalPages - 1) range.push("...");
      range.push(totalPages);
    }
    return range;
  };

  return (
    <motion.div
      className="search-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <header className="search-header">
        <div className="search-header-top">
          <h1 className="search-page-title">Search Movies</h1>
        </div>

        <form onSubmit={handleSearchSubmit} className="search-page-form">
          <div className="search-input-wrapper">
            <span className="search-input-icon">⌕</span>
            <input
              type="text"
              id="search-input"
              className="search-page-input"
              placeholder='Search for movies, e.g. "Inception"…'
              value={searchInput}
              onChange={handleInputChange}
              autoFocus
              autoComplete="off"
            />
            {searchInput && (
              <button
                type="button"
                className="search-input-clear"
                onClick={handleClearSearch}
                aria-label="Clear input"
              >
                ✕
              </button>
            )}
          </div>
          <button type="submit" className="search-page-btn">
            Search
          </button>
        </form>

        {!query && (
          <div className="popular-searches">
            <span className="popular-label">Popular:</span>
            <div className="popular-chips">
              {POPULAR_SEARCHES.map((term) => (
                <button
                  key={term}
                  className="popular-chip"
                  onClick={() => handlePopularSearch(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {query ? (
        <div className="search-layout">
          <aside className="search-controls">
            <div className="control-group">
              <h3>Sort By</h3>
              <select value={sortParam} onChange={handleSortChange}>
                <option value="popularity.desc">Popularity ↓</option>
                <option value="vote_average.desc">Rating ↓</option>
                <option value="release_date.desc">Newest First</option>
                <option value="release_date.asc">Oldest First</option>
              </select>
            </div>

            {genres.length > 0 && (
              <div className="control-group">
                <h3>Filter by Genre</h3>
                <ul className="genres-list">
                  <li>
                    <button
                      className={genreParam === null ? "active" : ""}
                      onClick={() =>
                        setSearchParams({
                          q: query,
                          page: "1",
                          sort: sortParam,
                        })
                      }
                    >
                      All Genres
                    </button>
                  </li>
                  {genres.map((g) => (
                    <li key={g.id}>
                      <button
                        className={genreParam === g.id ? "active" : ""}
                        onClick={() =>
                          setSearchParams({
                            q: query,
                            page: "1",
                            sort: sortParam,
                            genre: String(g.id),
                          })
                        }
                      >
                        {g.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          <main className="search-main">
            {!loading && !error && (
              <div className="search-query-info">
                <div className="query-text">
                  Results for <strong>"{query}"</strong>
                  Total <strong>"{totalResults}"</strong> results
                  {genreParam && genres.find((g) => g.id === genreParam) && (
                    <span className="genre-badge">
                      {genres.find((g) => g.id === genreParam)!.name}
                    </span>
                  )}
                </div>
              </div>
            )}

            {loading && (
              <div className="movie-grid">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="skeleton-card">
                    <div className="skeleton-box skeleton-card-poster"></div>
                    <div className="skeleton-box skeleton-card-title"></div>
                    <div className="skeleton-box skeleton-card-year"></div>
                  </div>
                ))}
              </div>
            )}

            {error && !loading && (
              <div className="search-error">
                <span className="error-icon">⚠</span>
                <p>{error}</p>
                <button
                  className="retry-btn"
                  onClick={() =>
                    setSearchParams({ q: query, page: "1", sort: sortParam })
                  }
                >
                  Retry
                </button>
              </div>
            )}

            {!loading && !error && movies.length === 0 && (
              <div className="search-empty-state">
                <div className="empty-icon">🎬</div>
                <h2>No results for "{query}"</h2>
                <p>Try adjusting your spelling or search for something else.</p>
                <button
                  className="browse-btn"
                  onClick={() => navigate("/movies")}
                >
                  Browse All Movies
                </button>
              </div>
            )}

            {!loading && !error && movies.length > 0 && (
              <>
                <MovieGrid movies={movies} />

                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      className="pagination-btn"
                      onClick={() => handlePageChange(pageParam - 1)}
                      disabled={pageParam === 1}
                    >
                      ‹
                    </button>

                    <div className="pagination-pages">
                      {getPaginationRange().map((item, idx) =>
                        item === "..." ? (
                          <span
                            key={`ellipsis-${idx}`}
                            className="pagination-ellipsis"
                          >
                            …
                          </span>
                        ) : (
                          <button
                            key={item}
                            className={`pagination-page ${item === pageParam ? "active" : ""}`}
                            onClick={() => handlePageChange(item as number)}
                          >
                            {item}
                          </button>
                        ),
                      )}
                    </div>

                    <button
                      className="pagination-btn"
                      onClick={() => handlePageChange(pageParam + 1)}
                      disabled={pageParam === totalPages}
                    >
                      ›
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      ) : (
        <div className="search-intro">
          <div className="search-intro-icon">🎥</div>
          <h2>Discover Your Next Favorite Film</h2>
          <p>Type a movie title, actor, or keyword above to get started.</p>
          <div className="search-intro-actions">
            <button className="browse-btn" onClick={() => navigate("/movies")}>
              Browse All Movies
            </button>
            <button
              className="browse-btn secondary"
              onClick={() => navigate("/favorites")}
            >
              My Favorites
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
