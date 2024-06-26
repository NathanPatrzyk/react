import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-2 items-center justify-center md:pb-8 pb-4">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "transition ease-in-out duration-300 text-sky-500 border-b-2 border-sky-500"
            : "transition ease-in-out duration-300 border-b-2 border-transparent hover:border-slate-300 hover:text-slate-300"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "transition ease-in-out duration-300 text-sky-500 border-b-2 border-sky-500"
            : "transition ease-in-out duration-300 border-b-2 border-transparent hover:border-slate-300 hover:text-slate-300"
        }
        to="/about"
      >
        Sobre
      </NavLink>
    </nav>
  );
};

export default Navbar;
