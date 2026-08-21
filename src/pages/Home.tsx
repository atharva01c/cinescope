import { useState, useEffect } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import type { Movie } from "../types";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../services/api";
import "./home.css";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const pageVariants: Variants = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 20, filter: "blur(10px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
        exit: { opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.4, ease: "easeIn" } }
      };

  const sectionVariants: Variants = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 30, filter: "blur(10px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
      };

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        setError(null);
        
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

  const SkeletonSection = () => (
    <div className="home-skeleton-section">
      <div className="skeleton-box home-skeleton-title"></div>
      <div className="home-skeleton-grid">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-box skeleton-card-poster"></div>
            <div className="skeleton-box skeleton-card-title"></div>
            <div className="skeleton-box skeleton-card-year"></div>
          </div>
        ))}
      </div>
    </div>
  );

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
        <div className="home-sections">
          <SkeletonSection />
          <SkeletonSection />
          <SkeletonSection />
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
