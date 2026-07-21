import axios from "axios";
import type { Movie, MovieDetail, CastMember, Genre } from "../types";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TMDB_TOKEN}`,
    Accept: "application/json",
  },
});

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await api.get("/movie/popular");
  return response.data.results;
};

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  const response = await api.get("/movie/top_rated");
  return response.data.results;
};

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await api.get("/movie/upcoming");
  return response.data.results;
};

export const getMovieDetails = async (id: number): Promise<MovieDetail> => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCast = async (id: number): Promise<CastMember[]> => {
  const response = await api.get(`/movie/${id}/credits`);
  return response.data.cast.slice(0, 10);
};

export const getSimilarMovies = async (id: number): Promise<Movie[]> => {
  const response = await api.get(`/movie/${id}/similar`);
  return response.data.results.slice(0, 6);
};

export const getGenres = async (): Promise<Genre[]> => {
  const response = await api.get("/genre/movie/list");
  return response.data.genres;
};

export const searchMovies = async (
  query: string,
  page: number = 1
): Promise<{ results: Movie[]; total_pages: number }> => {
  const response = await api.get("/search/movie", {
    params: { query, page },
  });
  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
};

export const discoverMovies = async (
  genreId?: number,
  sortBy: string = "popularity.desc",
  page: number = 1
): Promise<{ results: Movie[]; total_pages: number }> => {
  const params: Record<string, string | number> = { sort_by: sortBy, page };
  if (genreId) params.with_genres = genreId;

  const response = await api.get("/discover/movie", { params });
  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
};
