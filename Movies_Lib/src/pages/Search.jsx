import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

    const getSearchedMovies = async () => {
      const res = await fetch(searchWithQueryURL);
      const data = await res.json();
      setMovies(data.results);
    };

    getSearchedMovies();
  }, [query]);

  return (
    <div>
      <h2 className="mt-8 mb-4 text-center text-4xl text-white">
        Resultados para: <span className="text-yellow-400">{query}</span>
      </h2>
      <div className="mx-auto flex max-w-300 flex-wrap justify-between p-8">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
