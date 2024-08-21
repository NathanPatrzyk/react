import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";
import { SquareTerminal } from "lucide-react";

export function Navbar() {
  return (
    <nav
      className={`bg-transparent px-8 md:px-16 transition ease-in-out duration-300 fixed top-0 left-0 flex items-center justify-between py-3 w-screen h-16 shadow-md`}
    >
      <NavLink
        className="hover:opacity-90 text-orange-600 flex items-center gap-1 text-xl"
        to="/"
      >
        <SquareTerminal />
        Mini<span className="font-bold">Blog</span>
      </NavLink>

      <div className="items-center gap-2 flex">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-orange-600 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
              : "text-orange-600 hover:border-orange-600 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-orange-600 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
              : "text-orange-600 hover:border-orange-600 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
          }
          to="/about"
        >
          Sobre
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-orange-600 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
              : "text-orange-600 hover:border-orange-600 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
          }
          to="/login"
        >
          Entrar
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-orange-600 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
              : "text-orange-600 hover:border-orange-600 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
          }
          to="/register"
        >
          Cadastrar
        </NavLink>
      </div>
    </nav>
  );
}
