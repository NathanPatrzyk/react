import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/authContext";

import { SquareTerminal } from "lucide-react";

export function Navbar() {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className="z-50 border-b border-zinc-700 backdrop-blur-md px-8 md:px-16 transition ease-in-out duration-300 fixed top-0 left-0 flex items-center justify-between py-3 w-screen h-16">
      <NavLink
        className="hover:opacity-90 text-orange-500 flex items-center gap-1 text-xl"
        to="/"
      >
        <SquareTerminal />
        Mini<span className="font-bold">BLOG</span>
      </NavLink>

      <div className="items-center gap-4 flex">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
              : "text-orange-500 hover:border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
        {!user && (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
                  : "text-orange-500 hover:border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
              }
              to="/login"
            >
              Entrar
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
                  : "text-orange-500 hover:border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
              }
              to="/register"
            >
              Cadastrar
            </NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
                  : "text-orange-500 hover:border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
              }
              to="/posts/create"
            >
              Novo post
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
                  : "text-orange-500 hover:border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </>
        )}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 font-bold"
              : "text-orange-500 hover:border-orange-500 transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
          }
          to="/about"
        >
          Sobre
        </NavLink>
        {user && (
          <button
            onClick={logout}
            className="text-orange-500  transition ease-in-out duration-300 p-1 border-b-2 border-transparent hover:opacity-80  hover:border-opacity-80 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
}
