import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import type { Movie } from "../types";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../services/api";
import "./home.css";

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
  exit: { opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.4, ease: "easeIn" } }
};

const sectionVariants: Variants = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch popular, top-rated, and upcoming movies concurrently
        const [popular, topRated, upcoming] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getUpcomingMovies(),
        ]);
        
        setPopularMovies(popular.slice(0, 10));
        setTopRatedMovies(topRated.slice(0, 10));
        setUpcomingMovies(upcoming.slice(0, 10));
      } catch (err) {
        console.error("Failed to load home page data:", err);
        setError("Something went wrong while loading movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <motion.div 
      className="home-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero featuredMovie={popularMovies[0]} />
      
      {loading && (
        <div className="home-loader-container">
          <div className="home-spinner"></div>
          <p>Discovering movies for you...</p>
        </div>
      )}

      {error && (
        <div className="home-error-container">
          <p className="home-error-message">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="home-sections">
          <motion.div variants={sectionVariants}>
            <MovieSection title="Popular Movies" movies={popularMovies} />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <MovieSection title="Top Rated Movies" movies={topRatedMovies} />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <MovieSection title="Upcoming Movies" movies={upcomingMovies} />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
