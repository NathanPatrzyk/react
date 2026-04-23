import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, children }) => {
  return (
    <div
      className={`${!children ? "mb-10 flex w-[30%] flex-col justify-between bg-neutral-900/70 p-4 text-white" : ""}`}
    >
      <img
        className="mx-auto mb-4 max-w-full"
        src={imageUrl + movie.poster_path}
        alt={movie.title}
      />
      <h2 className={`mb-4 ${children ? "text-center" : ""}`}>{movie.title}</h2>
      <p
        className={`mb-4 flex items-center gap-1 ${children ? "justify-center" : ""}`}
      >
        <Star className="size-5 fill-yellow-400 text-amber-400" />{" "}
        {movie.vote_average}
      </p>
      {!children && (
        <Link
          className="rounded-sm border-2 border-yellow-400 bg-yellow-400 px-4 py-2 text-center text-xl font-bold text-black transition-all duration-400 hover:bg-transparent hover:text-yellow-400"
          to={`/movie/${movie.id}`}
        >
          Detalhes
        </Link>
      )}
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default MovieCard;
