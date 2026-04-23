import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import {
  ChartColumnIncreasing,
  FileText,
  Hourglass,
  NotebookText,
  Timer,
  Wallet,
  Wallet2,
} from "lucide-react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;

    const getMovie = async () => {
      const res = await fetch(movieUrl);
      const data = await res.json();
      setMovie(data);
    };

    getMovie();
  }, [id]);

  return (
    <div className="mx-auto my-8 flex max-w-150 flex-col pb-40">
      {movie && (
        <>
          <MovieCard movie={movie}>
            <p className="text-center">{movie.tagline}</p>
            <div>
              <h3 className="mb-4 flex items-center gap-2">
                <Wallet2 className="text-2xl text-yellow-500" /> Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div>
              <h3 className="mb-4 flex items-center gap-2">
                <ChartColumnIncreasing className="text-2xl text-yellow-500" />{" "}
                Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div>
              <h3 className="mb-4 flex items-center gap-2">
                <Hourglass className="text-2xl text-yellow-500" /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div>
              <h3 className="mb-4 flex items-center gap-2">
                <FileText className="text-2xl text-yellow-500" /> Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </MovieCard>
        </>
      )}
    </div>
  );
};

export default Movie;
