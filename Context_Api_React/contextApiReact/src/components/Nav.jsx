import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-screen flex items-center justify-between md:px-16 px-8">
      <div className="flex items-center gap-2 py-2">
        <NavLink
          className={({ isActive }) => (isActive ? "h-12" : "h-12")}
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
              ? "text-orange-500 text-2xl md:block hidden"
              : "text-orange-500 text-2xl md:block hidden"
          }
          to="/"
        >
          Context <strong className="font-bold">API</strong>
        </NavLink>
      </div>
      <div className="flex items-center gap-2 font-semibold">
        <NavLink className={({ isActive }) => (isActive ? "" : "")} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "" : "")} to="/about">
          Sobre
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "" : "")}
          to="/contact"
        >
          Contato
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
