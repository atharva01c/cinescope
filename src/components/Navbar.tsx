import { NavLink } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import "./navbar.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
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
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile: bottom pill nav */}
      <nav className="navbar-mobile">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `tab-item ${isActive ? "active" : ""}`}
          aria-label="Home"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => `tab-item ${isActive ? "active" : ""}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/></svg>
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => `tab-item ${isActive ? "active" : ""}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </NavLink>
        <NavLink
          to="/watchlist"
          className={({ isActive }) => `tab-item ${isActive ? "active" : ""}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </NavLink>
        <button
          onClick={toggleTheme}
          className="tab-item"
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </>
  );
}
