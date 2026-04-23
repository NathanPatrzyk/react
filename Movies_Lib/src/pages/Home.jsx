import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    const getTopRatedMovies = async () => {
      const res = await fetch(topRatedUrl);
      const data = await res.json();
      setTopMovies(data.results);
    };

    getTopRatedMovies();
  }, []);

  return (
    <div>
      <h2 className="mt-8 mb-4 text-center text-4xl text-white">
        Melhores filmes:
      </h2>
      <div className="mx-auto flex max-w-300 flex-wrap justify-between p-8">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
