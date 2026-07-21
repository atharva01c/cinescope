export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
  overview: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetail extends Movie {
  runtime: number;
  genres: Genre[];
  tagline: string;
  status: string;
  budget: number;
  revenue: number;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}
