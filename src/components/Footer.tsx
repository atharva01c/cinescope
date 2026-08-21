import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <span className="footer-text">
          © 2026 CineScope. All Rights Reserved.
        </span>
        <span className="footer-tmdb">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </span>
      </div>
    </footer>
  );
}
