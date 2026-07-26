import { createContext } from "react";
import type { Movie } from "../types";

export interface MovieContextType {
  favorites: Movie[];
  watchlist: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isInFavorites: (movieId: number) => boolean;
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (movieId: number) => void;
  isInWatchlist: (movieId: number) => boolean;
}

export const MovieContext = createContext<MovieContextType | undefined>(undefined);
