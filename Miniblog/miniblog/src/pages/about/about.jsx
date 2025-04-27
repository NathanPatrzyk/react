import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="text-zinc-50 pt-24 md:pt-32 p-8 md:p-16 flex flex-col items-center gap-8 w-screen max-w-2xl">
      <h2 className="text-orange-500 text-3xl w-full">
        Sobre o Mini <span className="font-bold">Blog</span>
      </h2>
      <p className="w-full">
        Este projeto consiste em um blog feito com{" "}
        <a
          target="_blank"
          href="https://react.dev/"
          className="font-bold text-orange-500 hover:underline"
        >
          React
        </a>{" "}
        no Frontend e{" "}
        <a
          target="_blank"
          href="https://firebase.google.com/?hl=pt-br"
          className="font-bold text-orange-500 hover:underline"
        >
          Firebase
        </a>{" "}
        no Backend
      </p>
      <div className="w-full flex flex-col justify-center items-center">
        <Link
          to="/posts/create"
          className="bg-orange-500 hover:bg-opacity-80 transition ease-in-out duration-300 text-orange-950 font-semibold rounded-md px-4 py-2 w-full text-center"
        >
          Criar post
        </Link>
      </div>
    </div>
  );
}
