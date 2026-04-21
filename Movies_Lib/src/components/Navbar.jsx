import { Clapperboard, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>
        <Link to="/">
          <Clapperboard />
          MoviesLib
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">
          <Search />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
