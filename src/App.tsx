import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import Watchlist from "./pages/Watchlist";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MovieProvider } from "./context/MovieContext";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  const location = useLocation();

  return (
    <ThemeContextProvider>
      <MovieProvider>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/search" element={<Search />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </MovieProvider>
    </ThemeContextProvider>
  );
}

export default App;
