import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <img src={movie.Poster} />
      <p>{movie.Plot}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Rating: {movie.imdbRating}</p>
    </div>
  );
}
