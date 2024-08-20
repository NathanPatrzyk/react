import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";
import { SquareTerminal } from "lucide-react";

export function Navbar() {
  const [opacity, setOpacity] = useState(100);

  const changeOpacity = () => {
    if (window.scrollY >= 64) {
      setOpacity(90);
    } else {
      setOpacity(100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeOpacity);
    return () => {
      window.removeEventListener("scroll", changeOpacity);
    };
  }, []);

  const opacityClasses = {
    100: "bg-opacity-100",
    90: "bg-opacity-90",
  };

  return (
    <nav
      className={`px-8 md:px-16 bg-orange-600 ${opacityClasses[opacity]} hover:bg-opacity-100 transition ease-in-out duration-300 fixed top-0 left-0 flex items-center justify-between py-3 w-screen h-16 shadow-lg`}
    >
      <NavLink
        className="hover:opacity-90 text-orange-50 flex items-center gap-1 text-xl"
        to="/"
      >
        <SquareTerminal />
        Mini<span className="font-bold">Blog</span>
      </NavLink>

      <div className="items-center gap-2 flex">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-zinc-900 border-zinc-900 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
              : "text-orange-50 hover:border-orange-50 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-zinc-900 border-zinc-900 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
              : "text-orange-50 hover:border-orange-50 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
          }
          to="/about"
        >
          Sobre
        </NavLink>
      </div>
    </nav>
  );
}
