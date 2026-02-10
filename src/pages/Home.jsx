import { useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";


export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const data = await searchMovies(query, page, type);

    if (data.Response === "False") {
      setError(data.Error);
      setMovies([]);
    } else {
      setMovies(data.Search);
      setError("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Movie Search</h1>

      <input
        className="border p-2 mr-2"
        placeholder="Search movie..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className="border p-2 mr-2"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>

      <div className="mt-4">
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)} className="ml-4">
          Next
        </button>
      </div>
    </div>
    
  );
}
