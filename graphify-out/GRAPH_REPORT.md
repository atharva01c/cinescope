# Graph Report - movie-explorer  (2026-07-26)

## Corpus Check
- 28 files · ~7,953 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 209 nodes · 292 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5d6c46fd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- CineScope Project README
- api.ts
- devDependencies
- compilerOptions
- Home.tsx
- MovieCard Component
- App.tsx
- ThemeContext.tsx
- package.json
- compilerOptions
- Frontend Design
- tsconfig.json
- Footer Component
- CineScope Copyright

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `Movie` - 17 edges
3. `compilerOptions` - 15 edges
4. `getGenres()` - 6 edges
5. `Frontend Design` - 6 edges
6. `CineScope Project README` - 6 edges
7. `scripts` - 5 edges
8. `MovieGrid()` - 5 edges
9. `MovieContext` - 5 edges
10. `getPopularMovies()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Vite defineConfig` --semantically_similar_to--> `Tech Stack: React 19 + Vite 8 + TypeScript + TMDB`  [INFERRED] [semantically similar]
  vite.config.ts → README.md
- `Framer Motion Page Transitions` --semantically_similar_to--> `Framer Motion Animations`  [INFERRED] [semantically similar]
  src/pages/Home.tsx → README.md
- `CineScope Branding` --semantically_similar_to--> `CineScope Project README`  [INFERRED] [semantically similar]
  index.html → README.md
- `MovieCardProps` --references--> `Movie`  [EXTRACTED]
  src/components/MovieCard.tsx → src/types/index.ts
- `MovieGridProps` --references--> `Movie`  [EXTRACTED]
  src/components/MovieGrid.tsx → src/types/index.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Core Browsing UI Components** — src_components_hero_herocomponent, src_components_moviecard_moviecardcomponent, src_components_footer_footercomponent, src_pages_home_homepage [INFERRED 0.85]

## Communities (16 total, 3 thin omitted)

### Community 0 - "CineScope Project README"
Cohesion: 0.11
Nodes (18): CineScope Branding, Google Fonts: Instrument Serif + Barlow, HTML Entry Template, Framer Motion Animations, CineScope Project README, Feature List: Search, Favorites, Watchlist, Dark Mode, localStorage Persistence, Project Structure Layout (+10 more)

### Community 1 - "api.ts"
Cohesion: 0.12
Nodes (23): HeroProps, MovieSectionProps, fetchMovieData(), MovieDetails(), pageVariants, fetchGenres(), fetchMovies(), Movies() (+15 more)

### Community 2 - "devDependencies"
Cohesion: 0.08
Nodes (25): eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies, eslint, @eslint/js (+17 more)

### Community 3 - "compilerOptions"
Cohesion: 0.08
Nodes (23): DOM, src, vite/client, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx (+15 more)

### Community 4 - "Home.tsx"
Cohesion: 0.44
Nodes (8): fetchHomeData(), Home(), Concurrent Movie Data Fetching, pageVariants, sectionVariants, getPopularMovies(), getTopRatedMovies(), getUpcomingMovies()

### Community 5 - "MovieCard Component"
Cohesion: 0.40
Nodes (5): Favorites Toggle Button, MovieCard Component, Poster Error Fallback, Rating Badge Display, Watchlist Toggle Button

### Community 6 - "App.tsx"
Cohesion: 0.11
Nodes (14): Footer(), MovieCardProps, MovieGrid(), MovieGridProps, MovieContext, MovieContextType, MovieProvider(), MovieProviderProps (+6 more)

### Community 7 - "ThemeContext.tsx"
Cohesion: 0.33
Nodes (6): Navbar(), ThemeContext, ThemeContextProvider(), ThemeProviderProps, useTheme(), Theme

### Community 8 - "package.json"
Cohesion: 0.10
Nodes (20): axios, framer-motion, dependencies, axios, framer-motion, react, react-dom, react-router-dom (+12 more)

### Community 9 - "compilerOptions"
Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 10 - "Frontend Design"
Cohesion: 0.29
Nodes (6): Design principles, Frontend Design, Ground it in the subject, More on writing in design, Process: brainstorm, explore, plan, critique, build, critique again, Restraint and self-critique

## Knowledge Gaps
- **94 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+89 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Home Page` connect `CineScope Project README` to `Home.tsx`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Why does `Concurrent Movie Data Fetching` connect `Home.tsx` to `CineScope Project README`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _94 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `CineScope Project README` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `api.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11587301587301588 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._