import type { Movie } from "../../types/movie";
import css from "./MovieGrid.module.css";

interface Props {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const MovieGrid = ({ movies, onSelect }: Props) => {
  if (movies.length === 0) return null;

  return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onSelect(movie)}>
          <div className={css.card}>
            <img
              className={css.image}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieGrid;
