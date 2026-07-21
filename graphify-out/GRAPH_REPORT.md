# Graph Report - .  (2026-07-21)

## Corpus Check
- Corpus is ~7,361 words - fits in a single context window. You may not need a graph.

## Summary
- 67 nodes · 50 edges · 24 communities detected
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Movie & Home API Services|Movie & Home API Services]]
- [[_COMMUNITY_Movie Discovery & Filtering|Movie Discovery & Filtering]]
- [[_COMMUNITY_Frontend Design & Typography Spec|Frontend Design & Typography Spec]]
- [[_COMMUNITY_Vite React Template Documentation|Vite React Template Documentation]]
- [[_COMMUNITY_Movie Card Actions|Movie Card Actions]]
- [[_COMMUNITY_Theme Context & State|Theme Context & State]]
- [[_COMMUNITY_App Entry & Root Setup|App Entry & Root Setup]]
- [[_COMMUNITY_Footer Component|Footer Component]]
- [[_COMMUNITY_Hero Component|Hero Component]]
- [[_COMMUNITY_Movie Grid Layout Component|Movie Grid Layout Component]]
- [[_COMMUNITY_Movie Context & Provider|Movie Context & Provider]]
- [[_COMMUNITY_Favorites Page Component|Favorites Page Component]]
- [[_COMMUNITY_Not Found Page Component|Not Found Page Component]]
- [[_COMMUNITY_Search Page Component|Search Page Component]]
- [[_COMMUNITY_Watchlist Page Component|Watchlist Page Component]]
- [[_COMMUNITY_ESLint Tooling Configuration|ESLint Tooling Configuration]]
- [[_COMMUNITY_Vite Build Configuration|Vite Build Configuration]]
- [[_COMMUNITY_Movie Section Component|Movie Section Component]]
- [[_COMMUNITY_Navigation Bar Component|Navigation Bar Component]]
- [[_COMMUNITY_Movie & API Type Definitions|Movie & API Type Definitions]]
- [[_COMMUNITY_Theme Type Definitions|Theme Type Definitions]]
- [[_COMMUNITY_Hero Graphic Asset|Hero Graphic Asset]]
- [[_COMMUNITY_React Logo Vector Asset|React Logo Vector Asset]]
- [[_COMMUNITY_Vite Logo Vector Asset|Vite Logo Vector Asset]]

## God Nodes (most connected - your core abstractions)
1. `fetchHomeData()` - 4 edges
2. `fetchMovieData()` - 4 edges
3. `React + TypeScript + Vite Template` - 4 edges
4. `Frontend Design Skill Specification` - 4 edges
5. `fetchGenres()` - 2 edges
6. `fetchMovies()` - 2 edges
7. `getPopularMovies()` - 2 edges
8. `getTopRatedMovies()` - 2 edges
9. `getUpcomingMovies()` - 2 edges
10. `getMovieDetails()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `fetchHomeData()` --calls--> `getPopularMovies()`  [INFERRED]
  src\pages\Home.tsx → src\services\api.ts
- `fetchHomeData()` --calls--> `getTopRatedMovies()`  [INFERRED]
  src\pages\Home.tsx → src\services\api.ts
- `fetchHomeData()` --calls--> `getUpcomingMovies()`  [INFERRED]
  src\pages\Home.tsx → src\services\api.ts
- `fetchMovieData()` --calls--> `getMovieDetails()`  [INFERRED]
  src\pages\MovieDetails.tsx → src\services\api.ts
- `fetchMovieData()` --calls--> `getMovieCast()`  [INFERRED]
  src\pages\MovieDetails.tsx → src\services\api.ts

## Hyperedges (group relationships)
- **hyperedge_vite_react_compilation_tools** — readme_vite_react_plugin, readme_vite_react_swc_plugin, readme_react_compiler [INFERRED]
- **hyperedge_frontend_brand_identity** — index_html_cinescope, index_html_google_fonts, skill_typography_pairing [INFERRED]

## Communities

### Community 0 - "Movie & Home API Services"
Cohesion: 0.23
Nodes (8): getMovieCast(), getMovieDetails(), getPopularMovies(), getSimilarMovies(), getTopRatedMovies(), getUpcomingMovies(), fetchHomeData(), fetchMovieData()

### Community 1 - "Movie Discovery & Filtering"
Cohesion: 0.25
Nodes (4): discoverMovies(), getGenres(), fetchGenres(), fetchMovies()

### Community 2 - "Frontend Design & Typography Spec"
Cohesion: 0.25
Nodes (8): index.html Entry Point, CineScope Movie Explorer Metadata, Google Fonts (Instrument Serif & Barlow), Distinctive Design Principles & Motion Rationale, Two-Pass Brainstorm & Critique Process, Frontend Design Skill Specification, Interface Copywriting & User Voice Guidelines, Typography Pairing and Scaled Display Roles

### Community 3 - "Vite React Template Documentation"
Cohesion: 0.5
Nodes (5): ESLint Type-Aware Rules Configuration, React Compiler Performance Rationale, @vitejs/plugin-react (Oxc), @vitejs/plugin-react-swc (SWC), React + TypeScript + Vite Template

### Community 4 - "Movie Card Actions"
Cohesion: 0.5
Nodes (0): 

### Community 5 - "Theme Context & State"
Cohesion: 0.67
Nodes (0): 

### Community 6 - "App Entry & Root Setup"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Footer Component"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Hero Component"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Movie Grid Layout Component"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Movie Context & Provider"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Favorites Page Component"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Not Found Page Component"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Search Page Component"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Watchlist Page Component"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "ESLint Tooling Configuration"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Vite Build Configuration"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Movie Section Component"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Navigation Bar Component"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Movie & API Type Definitions"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Theme Type Definitions"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Hero Graphic Asset"
Cohesion: 1.0
Nodes (1): Isometric Stacked Layer Hero Illustration

### Community 22 - "React Logo Vector Asset"
Cohesion: 1.0
Nodes (1): React Logo SVG

### Community 23 - "Vite Logo Vector Asset"
Cohesion: 1.0
Nodes (1): Vite Logo SVG

## Knowledge Gaps
- **9 isolated node(s):** `CineScope Movie Explorer Metadata`, `React Compiler Performance Rationale`, `ESLint Type-Aware Rules Configuration`, `Distinctive Design Principles & Motion Rationale`, `Two-Pass Brainstorm & Critique Process` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `App Entry & Root Setup`** (2 nodes): `App.tsx`, `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Footer Component`** (2 nodes): `Footer()`, `Footer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Component`** (2 nodes): `Hero()`, `Hero.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Movie Grid Layout Component`** (2 nodes): `MovieGrid()`, `MovieGrid.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Movie Context & Provider`** (2 nodes): `MovieProvider()`, `MovieContext.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Favorites Page Component`** (2 nodes): `Favorites()`, `Favorites.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Not Found Page Component`** (2 nodes): `NotFound()`, `NotFound.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Search Page Component`** (2 nodes): `Search()`, `Search.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Watchlist Page Component`** (2 nodes): `Watchlist.tsx`, `Watchlist()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ESLint Tooling Configuration`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Build Configuration`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Movie Section Component`** (1 nodes): `MovieSection.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Navigation Bar Component`** (1 nodes): `Navbar.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Movie & API Type Definitions`** (1 nodes): `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Theme Type Definitions`** (1 nodes): `Theme.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Graphic Asset`** (1 nodes): `Isometric Stacked Layer Hero Illustration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `React Logo Vector Asset`** (1 nodes): `React Logo SVG`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Logo Vector Asset`** (1 nodes): `Vite Logo SVG`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getGenres()` connect `Movie Discovery & Filtering` to `Movie & Home API Services`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `discoverMovies()` connect `Movie Discovery & Filtering` to `Movie & Home API Services`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `fetchHomeData()` (e.g. with `getPopularMovies()` and `getTopRatedMovies()`) actually correct?**
  _`fetchHomeData()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `fetchMovieData()` (e.g. with `getMovieDetails()` and `getMovieCast()`) actually correct?**
  _`fetchMovieData()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `CineScope Movie Explorer Metadata`, `React Compiler Performance Rationale`, `ESLint Type-Aware Rules Configuration` to the rest of the system?**
  _9 weakly-connected nodes found - possible documentation gaps or missing edges._