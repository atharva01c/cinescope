import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { MovieDetail, CastMember, Movie } from "../types";
import { getMovieDetails, getMovieCast, getSimilarMovies } from "../services/api";
import { MovieContext } from "../context/MovieContext";
import { motion, type Variants } from "framer-motion";

const pageVariants: Variants = {
  initial: { opacity: 0, filter: "blur(20px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
  exit: { opacity: 0, filter: "blur(20px)", transition: { duration: 0.4, ease: "easeIn" } }
};
import MovieCard from "../components/MovieCard";
import "./movie-details.css";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const context = useContext(MovieContext);
  
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [similar, setSimilar] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  if (!context) {
    throw new Error("MovieDetails must be used within a MovieProvider");
  }

  const {
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist
  } = context;

  const movieId = Number(id);

  // Scroll to top when movie ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (isNaN(movieId)) {
      setError("Invalid Movie ID.");
      setLoading(false);
      return;
    }

    const fetchMovieData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch movie detail, cast list, and similar movies concurrently
        const [detailData, castData, similarData] = await Promise.all([
          getMovieDetails(movieId),
          getMovieCast(movieId),
          getSimilarMovies(movieId)
        ]);

        setMovie(detailData);
        setCast(castData);
        setSimilar(similarData);
      } catch (err) {
        console.error("Error loading movie details page:", err);
        setError("Failed to fetch movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (loading) {
    return (
      <div className="movie-details-page">
        <div className="details-container">
          <div className="details-main-info">
            <div className="details-poster-col">
              <div className="skeleton-box skeleton-poster"></div>
            </div>
            <div className="details-content-col" style={{ width: '100%' }}>
              <div className="skeleton-box skeleton-tagline"></div>
              <div className="skeleton-box skeleton-title"></div>
              <div className="skeleton-box skeleton-meta"></div>
              <div className="skeleton-box skeleton-genres"></div>
              <div className="skeleton-box skeleton-overview-h"></div>
              <div className="skeleton-box skeleton-overview-p"></div>
              <div className="skeleton-box skeleton-overview-p short"></div>
              <div className="skeleton-box skeleton-actions"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="details-error-container">
        <p className="details-error-message">{error || "Movie not found."}</p>
        <button onClick={() => navigate("/movies")} className="back-home-btn">
          Back to Movies
        </button>
      </div>
    );
  }

  const favorited = isInFavorites(movie.id);
  const watchlisted = isInWatchlist(movie.id);

  // Format runtime to h and m (e.g. 148 -> 2h 28m)
  const formatRuntime = (minutes: number) => {
    if (!minutes) return "N/A";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const backdropUrl = movie.backdrop_path
    ? movie.backdrop_path.startsWith("http")
      ? movie.backdrop_path
      : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";

  const posterUrl = movie.poster_path
    ? movie.poster_path.startsWith("http")
      ? movie.poster_path
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <motion.div 
      className="movie-details-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Backdrop Banner */}
      {backdropUrl && (
        <div
          className="details-backdrop"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        >
          <div className="backdrop-gradient"></div>
        </div>
      )}

      {/* Main Info Section */}
      <div className="details-container">
        <div className="details-main-info">
          {/* Poster Column */}
          <div className="details-poster-col">
            <img
              src={posterUrl}
              alt={movie.title}
              className="details-poster-img"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.parentElement?.querySelector(".details-poster-fallback");
                if (fallback) (fallback as HTMLElement).style.display = "flex";
              }}
            />
            <div className="details-poster-fallback">
              <span className="fallback-icon">🎬</span>
              <span className="fallback-text">No Poster Available</span>
            </div>
          </div>

          {/* Details Content Column */}
          <div className="details-content-col">
            {movie.tagline && <span className="details-tagline">"{movie.tagline}"</span>}
            <h1 className="details-title">{movie.title}</h1>
            
            <div className="details-meta-row">
              <span className="meta-badge rating">★ {movie.vote_average.toFixed(1)}</span>
              <span>{movie.release_date}</span>
              <span>{formatRuntime(movie.runtime)}</span>
              <span>{movie.status}</span>
            </div>

            <div className="details-genres">
              {movie.genres &&
                movie.genres.map((genre) => (
                  <span key={genre.id} className="genre-pill">
                    {genre.name}
                  </span>
                ))}
            </div>

            <div className="details-overview-group">
              <h3>Overview</h3>
              <p className="details-overview">{movie.overview}</p>
            </div>

            {/* Action Buttons */}
            <div className="details-actions">
              <button
                className={`action-btn fav-action-btn ${favorited ? "active" : ""}`}
                onClick={() => (favorited ? removeFromFavorites(movie.id) : addToFavorites(movie))}
              >
                {favorited ? "★ Favorited" : "☆ Add to Favorites"}
              </button>
              <button
                className={`action-btn watch-action-btn ${watchlisted ? "active" : ""}`}
                onClick={() => (watchlisted ? removeFromWatchlist(movie.id) : addToWatchlist(movie))}
              >
                {watchlisted ? "✓ Watchlisted" : "+ Add to Watchlist"}
              </button>
            </div>
          </div>
        </div>

        {/* Cast Section */}
        {cast.length > 0 && (
          <div className="details-section cast-section">
            <h2 className="section-title">Cast Members</h2>
            <div className="cast-list">
              {cast.map((member) => (
                <div key={member.id} className="cast-card">
                  <div className="cast-avatar">
                    {member.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                        alt={member.name}
                      />
                    ) : (
                      <div className="cast-avatar-fallback">{member.name[0]}</div>
                    )}
                  </div>
                  <div className="cast-info">
                    <p className="cast-name">{member.name}</p>
                    <p className="cast-character">{member.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Similar Movies Section */}
        {similar.length > 0 && (
          <div className="details-section similar-section">
            <h2 className="section-title">Similar Movies</h2>
            <div className="movie-section-grid">
              {similar.map((simMovie) => (
                <MovieCard key={simMovie.id} movie={simMovie} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
