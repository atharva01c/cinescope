import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Movie } from "../types";
import "./hero.css";

interface HeroProps {
  featuredMovie?: Movie;
}

export default function Hero({ featuredMovie }: HeroProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const backdropUrl = featuredMovie?.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${featuredMovie.backdrop_path}`
    : null;

  return (
    <div className="hero-container">
      {backdropUrl && (
        <div
          className="hero-backdrop-image"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        />
      )}
      <div className="hero-backdrop-overlay" />
      <div className="hero-content-wrapper">
        <h1 className="hero-title">Welcome to CineScope</h1>
        <p className="hero-subtitle">
          Millions of movies to discover, start with a search.
        </p>
        <form className="hero-search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="hero-search-input"
            placeholder='Search for movies, e.g. "Inception"…'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" className="hero-search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
