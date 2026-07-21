import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./navbar.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          CineScope
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/watchlist"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Watchlist
          </NavLink>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
