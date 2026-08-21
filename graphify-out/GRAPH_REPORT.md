# Graph Report - .  (2026-08-21)

## Corpus Check
- Corpus is ~21,885 words - fits in a single context window. You may not need a graph.

## Summary
- 74 nodes · 58 edges · 23 communities detected
- Extraction: 83% EXTRACTED · 17% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TMDB API Service|TMDB API Service]]
- [[_COMMUNITY_Movie Discovery & Search|Movie Discovery & Search]]
- [[_COMMUNITY_App Branding & Theme|App Branding & Theme]]
- [[_COMMUNITY_App Shell & Routing|App Shell & Routing]]
- [[_COMMUNITY_Tech Dependencies|Tech Dependencies]]
- [[_COMMUNITY_Movie Card Interaction|Movie Card Interaction]]
- [[_COMMUNITY_Footer Component|Footer Component]]
- [[_COMMUNITY_Hero Search|Hero Search]]
- [[_COMMUNITY_Movie Grid Display|Movie Grid Display]]
- [[_COMMUNITY_Theme Context|Theme Context]]
- [[_COMMUNITY_Movie Context|Movie Context]]
- [[_COMMUNITY_Home Page|Home Page]]
- [[_COMMUNITY_Movies Page|Movies Page]]
- [[_COMMUNITY_Search Page|Search Page]]
- [[_COMMUNITY_Movie Details Page|Movie Details Page]]
- [[_COMMUNITY_Favorites Page|Favorites Page]]
- [[_COMMUNITY_Watchlist Page|Watchlist Page]]
- [[_COMMUNITY_Navbar Component|Navbar Component]]
- [[_COMMUNITY_CSS Shared Styles|CSS Shared Styles]]
- [[_COMMUNITY_Movie Details CSS|Movie Details CSS]]
- [[_COMMUNITY_Movie Card CSS|Movie Card CSS]]
- [[_COMMUNITY_Hero CSS|Hero CSS]]
- [[_COMMUNITY_Not Found Page|Not Found Page]]

## God Nodes (most connected - your core abstractions)
1. `Tech Stack` - 7 edges
2. `CineScope Features` - 5 edges
3. `fetchHomeData()` - 4 edges
4. `fetchMovieData()` - 4 edges
5. `CineScope Movie Explorer` - 4 edges
6. `fetchGenres()` - 2 edges
7. `fetchMovies()` - 2 edges
8. `getPopularMovies()` - 2 edges
9. `getTopRatedMovies()` - 2 edges
10. `getUpcomingMovies()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `CineScope Movie Explorer` --conceptually_related_to--> `Tech Stack`  [INFERRED]
  index.html → README.md
- `fetchHomeData()` --calls--> `getPopularMovies()`  [INFERRED]
  src\pages\Home.tsx → src\services\api.ts
- `fetchHomeData()` --calls--> `getTopRatedMovies()`  [INFERRED]
  src\pages\Home.tsx → src\services\api.ts
- `fetchHomeData()` --calls--> `getUpcomingMovies()`  [INFERRED]
  src\pages\Home.tsx → src\services\api.ts
- `fetchMovieData()` --calls--> `getMovieDetails()`  [INFERRED]
  src\pages\MovieDetails.tsx → src\services\api.ts

## Communities

### Community 0 - "TMDB API Service"
Cohesion: 0.23
Nodes (8): getMovieCast(), getMovieDetails(), getPopularMovies(), getSimilarMovies(), getTopRatedMovies(), getUpcomingMovies(), fetchHomeData(), fetchMovieData()

### Community 1 - "Movie Discovery & Search"
Cohesion: 0.22
Nodes (4): discoverMovies(), getGenres(), fetchGenres(), fetchMovies()

### Community 2 - "App Branding & Theme"
Cohesion: 0.22
Nodes (9): Barlow Font, CineScope Movie Explorer, Instrument Serif Font, Dark and Light Mode, Favorites and Watchlist, CineScope Features, Glassmorphism UI Design, localStorage Persistence (+1 more)

### Community 3 - "App Shell & Routing"
Cohesion: 0.29
Nodes (0): 

### Community 4 - "Tech Dependencies"
Cohesion: 0.29
Nodes (7): Axios HTTP Client, Framer Motion, React 19, React Router DOM v7, Tech Stack, TMDB API, Vite 8

### Community 5 - "Movie Card Interaction"
Cohesion: 0.4
Nodes (0): 

### Community 6 - "Footer Component"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Hero Search"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Movie Grid Display"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Theme Context"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Movie Context"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Home Page"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Movies Page"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Search Page"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Movie Details Page"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Favorites Page"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Watchlist Page"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Navbar Component"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "CSS Shared Styles"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Movie Details CSS"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Movie Card CSS"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Hero CSS"
Cohesion: 1.0
Nodes (1): Isometric Stacked Layer Hero Illustration

### Community 22 - "Not Found Page"
Cohesion: 1.0
Nodes (1): React Logo SVG

## Knowledge Gaps
- **14 isolated node(s):** `Isometric Stacked Layer Hero Illustration`, `React Logo SVG`, `Instrument Serif Font`, `Barlow Font`, `React 19` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Footer Component`** (2 nodes): `Footer()`, `Footer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Search`** (2 nodes): `handleSubmit()`, `Hero.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Movie Grid Display`** (2 nodes): `MovieGrid()`, `MovieGrid.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Theme Context`** (2 nodes): `themeContext.ts`, `useTheme()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Movie Context`** (2 nodes): `Favorites()`, `Favorites.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Home Page`** (2 nodes): `NotFound()`, `NotFound.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Movies Page`** (2 nodes): `Search()`, `Search.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Search Page`** (2 nodes): `Watchlist.tsx`, `Watchlist()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Movie Details Page`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Favorites Page`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Watchlist Page`** (1 nodes): `MovieSection.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Navbar Component`** (1 nodes): `Navbar.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `CSS Shared Styles`** (1 nodes): `movieContext.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Movie Details CSS`** (1 nodes): `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Movie Card CSS`** (1 nodes): `Theme.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero CSS`** (1 nodes): `Isometric Stacked Layer Hero Illustration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Not Found Page`** (1 nodes): `React Logo SVG`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `CineScope Movie Explorer` connect `App Branding & Theme` to `Tech Dependencies`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `Tech Stack` connect `Tech Dependencies` to `App Branding & Theme`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `fetchHomeData()` (e.g. with `getPopularMovies()` and `getTopRatedMovies()`) actually correct?**
  _`fetchHomeData()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `fetchMovieData()` (e.g. with `getMovieDetails()` and `getMovieCast()`) actually correct?**
  _`fetchMovieData()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Isometric Stacked Layer Hero Illustration`, `React Logo SVG`, `Instrument Serif Font` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._