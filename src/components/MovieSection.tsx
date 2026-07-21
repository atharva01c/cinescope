import type { Movie } from "../types";
import MovieCard from "./MovieCard";
import "./movie-section.css";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

export default function MovieSection({ title, movies }: MovieSectionProps) {
  if (movies.length === 0) return null;

  return (
    <section className="movie-section">
      <h2 className="movie-section-title">{title}</h2>
      <div className="movie-section-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
