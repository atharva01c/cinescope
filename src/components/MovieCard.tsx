import { useContext } from "react";
import type { Movie } from "../types";
import { MovieContext } from "../context/movieContext";
import "./movie-card.css";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("MovieCard must be used within a MovieProvider");
  }

  const {
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist
  } = context;

  const favorited = isInFavorites(movie.id);
  const watchlisted = isInWatchlist(movie.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (favorited) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  const handleWatchlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (watchlisted) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  const releaseYear = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "0.0";
  const posterUrl = movie.poster_path
    ? movie.poster_path.startsWith("http")
      ? movie.poster_path
      : `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "https://via.placeholder.com/342x513?text=No+Poster";

  return (
    <a
      href={`/movie/${movie.id}`}
      className="movie-card"
      aria-label={`View details for ${movie.title}`}
    >
      <div className="movie-poster-container">
        <img
          src={posterUrl}
          alt={movie.title}
          className="movie-poster"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.parentElement?.querySelector(".movie-poster-fallback");
            if (fallback) (fallback as HTMLElement).style.display = "flex";
          }}
        />
        <div className="movie-poster-fallback">
          <span className="fallback-icon">🎬</span>
          <span className="fallback-text">No Poster</span>
        </div>
        <div className="movie-overlay">
          <button
            className={`overlay-btn fav-btn ${favorited ? "active" : ""}`}
            onClick={handleFavoriteClick}
            aria-label={favorited ? `Remove ${movie.title} from Favorites` : `Add ${movie.title} to Favorites`}
          >
            {favorited ? "★" : "☆"}
          </button>
          <button
            className={`overlay-btn watch-btn ${watchlisted ? "active" : ""}`}
            onClick={handleWatchlistClick}
            aria-label={watchlisted ? `Remove ${movie.title} from Watchlist` : `Add ${movie.title} to Watchlist`}
          >
            {watchlisted ? "✓" : "+"}
          </button>
        </div>
        <div className="movie-rating-badge">{rating}</div>
      </div>
      <div className="movie-info">
        <h3 className="movie-card-title" title={movie.title}>{movie.title}</h3>
        <p className="movie-card-year">{releaseYear}</p>
      </div>
    </a>
  );
}
