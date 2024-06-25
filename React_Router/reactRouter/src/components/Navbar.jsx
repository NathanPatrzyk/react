import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-2 items-center justify-center md:pb-8 pb-4">
      <Link
        className="transition ease-in-out duration-300 hover:underline hover:text-slate-300"
        to="/"
      >
        Home
      </Link>
      <Link
        className="transition ease-in-out duration-300 hover:underline hover:text-slate-300"
        to="/about"
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
