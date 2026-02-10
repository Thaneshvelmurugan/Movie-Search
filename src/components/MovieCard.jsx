import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="border rounded p-2 hover:shadow">
        <img src={movie.Poster} alt="" />
        <h3 className="font-bold">{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </Link>
  );
}
