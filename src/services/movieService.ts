import axios from "axios";
import type { Movie } from "../types/movie";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    "Content-Type": "application/json",
  },
});

interface TMDBResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  if (!query) return [];

  const response = await instance.get<TMDBResponse>("/search/movie", {
    params: { query, include_adult: false },
  });

  return response.data.results;
};
