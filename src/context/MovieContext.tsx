import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Movie } from "../types";
import { MovieContext } from "./movieContext";

interface MovieProviderProps {
  children: ReactNode;
}

export function MovieProvider({ children }: MovieProviderProps) {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem("cinescope_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    const saved = localStorage.getItem("cinescope_watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync favorites state to localStorage
  useEffect(() => {
    localStorage.setItem("cinescope_favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Sync watchlist state to localStorage
  useEffect(() => {
    localStorage.setItem("cinescope_watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToFavorites = (movie: Movie) => {
    if (!favorites.some((m) => m.id === movie.id)) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const removeFromFavorites = (movieId: number) => {
    setFavorites((prev) => prev.filter((m) => m.id !== movieId));
  };

  const isInFavorites = (movieId: number) => {
    return favorites.some((m) => m.id === movieId);
  };

  const addToWatchlist = (movie: Movie) => {
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist((prev) => [...prev, movie]);
    }
  };

  const removeFromWatchlist = (movieId: number) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== movieId));
  };

  const isInWatchlist = (movieId: number) => {
    return watchlist.some((m) => m.id === movieId);
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        watchlist,
        addToFavorites,
        removeFromFavorites,
        isInFavorites,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
