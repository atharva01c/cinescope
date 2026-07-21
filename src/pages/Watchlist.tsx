import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieGrid from "../components/MovieGrid";
import { motion, type Variants } from "framer-motion";

const pageVariants: Variants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.3, ease: "easeIn" } }
};
import { useNavigate } from "react-router-dom";
import "./watchlist.css";

export default function Watchlist() {
  const context = useContext(MovieContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("Watchlist page must be used within a MovieProvider");
  }

  const { watchlist } = context;

  return (
    <motion.div 
      className="watchlist-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <header className="watchlist-header">
        <h1 className="watchlist-title">My Watchlist</h1>
        <p className="watchlist-subtitle">
          Movies you are planning to watch in the future
        </p>
      </header>

      {watchlist.length === 0 ? (
        <div className="watchlist-empty-state">
          <div className="empty-icon">➕</div>
          <h2>Your Watchlist is Empty</h2>
          <p>
            Find interesting movies in our explorer and click the plus icon on any movie card to save them here for later.
          </p>
          <button className="browse-movies-btn" onClick={() => navigate("/movies")}>
            Browse Movies
          </button>
        </div>
      ) : (
        <MovieGrid movies={watchlist} />
      )}
    </motion.div>
  );
}
