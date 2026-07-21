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
import "./favorites.css";

export default function Favorites() {
  const context = useContext(MovieContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("Favorites page must be used within a MovieProvider");
  }

  const { favorites } = context;

  return (
    <motion.div 
      className="favorites-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <header className="favorites-header">
        <h1 className="favorites-title">Favorites</h1>
        <p className="favorites-subtitle">Your personal collection of cinematic gems.</p>
      </header>

      {favorites.length === 0 ? (
        <div className="favorites-empty-state">
          <div className="empty-icon">★</div>
          <h2>No Favorites Yet</h2>
          <p>
            Explore our movie catalog and click the star icon on any movie card to add it to your favorites.
          </p>
          <button className="browse-movies-btn" onClick={() => navigate("/movies")}>
            Browse Movies
          </button>
        </div>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </motion.div>
  );
}
