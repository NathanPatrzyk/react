import { Clapperboard, Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="flex items-center justify-between bg-neutral-900 px-8 py-4">
      <h2>
        <Link className="flex items-center gap-2" to="/">
          <Clapperboard />
          MoviesLib
        </Link>
      </h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="h-9 rounded-sm border-2 border-neutral-800 bg-neutral-800 px-2 py-1"
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="flex size-9 cursor-pointer items-center rounded-sm border-2 border-yellow-400 bg-yellow-400 p-1 text-xl text-black transition-all duration-400 hover:bg-transparent hover:text-yellow-400"
          type="submit"
        >
          <Search />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
