import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import "./not-found.css";

const pageVariants: Variants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.3, ease: "easeIn" } }
};

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="not-found-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="not-found-card">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-description">
          The page you are looking for does not exist or has been moved to another universe.
        </p>
        <button onClick={() => navigate("/")} className="back-home-btn">
          Go Back Home
        </button>
      </div>
    </motion.div>
  );
}
