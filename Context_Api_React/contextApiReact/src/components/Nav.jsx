import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen flex items-center justify-between md:px-16 px-8">
      <div className="transition-all duration-300 flex items-center py-2 hover:opacity-85">
        <NavLink
          className={({ isActive }) => (isActive ? "h-12 pe-1" : "h-12 pe-1")}
          to="/"
        >
          <lord-icon
            src="https://cdn.lordicon.com/lzgmgrnn.json"
            trigger="hover"
            colors="primary:#f97316"
            style={{ width: "48px", height: "48px" }}
          ></lord-icon>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 text-2xl md:block hidden ps-1"
              : "text-orange-500 text-2xl md:block hidden ps-1"
          }
          to="/"
        >
          Context <strong className="font-bold">API</strong>
        </NavLink>
      </div>
      <div className="flex items-center gap-2 font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-1 pb-1 text-orange-500 border-b-2 border-orange-500"
              : "transition-all duration-300 px-1 pb-1 hover:text-orange-200 border-b-2 border-transparent hover:border-orange-200"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-1 pb-1 text-orange-500 border-b-2 border-orange-500"
              : "transition-all duration-300 px-1 pb-1 hover:text-orange-200 border-b-2 border-transparent hover:border-orange-200"
          }
          to="/products"
        >
          Produtos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-1 pb-1 text-orange-500 border-b-2 border-orange-500"
              : "transition-all duration-300 px-1 pb-1 hover:text-orange-200 border-b-2 border-transparent hover:border-orange-200"
          }
          to="/about"
        >
          Sobre
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
