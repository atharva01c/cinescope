# <a href="http://35.154.56.73/">🎬 CineScope — Movie Explorer</a>

> A sleek, responsive, and feature-rich cinematic web application to discover, search, and curate your personal movie collection. Powered by React 19, Vite, TypeScript, and the TMDB API.

---

## ✨ Features

- 🌟 **Trending & Highlights**: Hero banner featuring top spotlight movies with backdrop visuals, ratings, and quick actions.
- 🍿 **Curated Categories**: Browse through **Popular**, **Top Rated**, and **Upcoming** movies.
- 🔍 **Search & Discover**: Search any movie by title or filter by genres and sorting options (Popularity, Rating, Release Date).
- 🎬 **Comprehensive Movie Details**: Detailed view including movie backdrop, synopsis, runtime, release date, user rating, cast details, and recommended similar movies.
- ❤️ **Favorites & 📌 Watchlist**: Save movies to your personal Favorites or Watchlist, persisted locally in your browser (`localStorage`).
- 🌓 **Dark & Light Mode**: Seamless theme switching with custom design tokens and persistent user preferences.
- 🎨 **Cinematic UI & Animations**: Built with modern CSS design variables, glassmorphism, responsive grids, and smooth page transitions powered by **Framer Motion**.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Data Source**: [TMDB API (The Movie Database)](https://www.themoviedb.org/documentation/api)
- **Styling**: Vanilla CSS (CSS Modules & Custom Variables) with custom dark/light design system
- **Typography**: Google Fonts (*Instrument Serif* & *Barlow*)

---

## 📁 Project Structure

```text
movie-explorer/
├── public/                # Static assets
├── src/
│   ├── assets/            # Project images and graphics
│   ├── components/        # Reusable UI components (Navbar, Footer, MovieCard, Hero, etc.)
│   ├── context/           # React Context (MovieContext, ThemeContext)
│   ├── pages/             # Route pages (Home, Movies, Search, MovieDetails, Favorites, Watchlist, NotFound)
│   ├── services/          # API layer and TMDB integration (api.ts)
│   ├── types/             # TypeScript interfaces and type definitions
│   ├── App.tsx            # Main application component & routes setup
│   ├── index.css          # Global styles & CSS variable tokens
│   └── main.tsx           # Application entry point
├── .env                   # Environment configuration (TMDB API Token)
├── index.html             # HTML entry template
├── package.json           # Project dependencies & scripts
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite bundler configuration
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (comes bundled with Node.js) or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory (or update the existing one) with your TMDB API v3 Access Token:

```env
VITE_TMDB_ACCESS_TOKEN=your_tmdb_access_token_here
```

> **Note**: You can get an API Access Token by creating a free account on [The Movie Database (TMDB)](https://www.themoviedb.org/).

### 4. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the app.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` — Starts the local development server with HMR.
- `npm run build` — Runs TypeScript type-checking and builds the app for production in the `dist` directory.
- `npm run preview` — Locally previews the production build.
- `npm run lint` — Runs ESLint to check for code quality and style issues.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

