import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

export function Home() {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-orange-50 pt-24 md:pt-32 p-8 md:p-16 flex flex-col items-center gap-8 w-screen max-w-2xl">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-orange-500 text-3xl font-bold w-full">
          Veja nossos posts mais recentes
        </h2>
        <p className="w-full">Ou realize uma busca por tags</p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center text-zinc-500 hover:text-zinc-400 focus:text-zinc-400 active:text-zinc-400 box-border hover:bg-zinc-800/30 focus:bg-zinc-800/30 active:bg-zinc-800/30 ring-1 ring-zinc-800/80 hover:ring-zinc-700 focus:ring-orange-500 active:ring-orange-500 rounded-md w-full transition ease-in-out duration-300"
        >
          <input
            className="bg-transparent px-4 py-2 w-full focus:outline-none active:outline-none"
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="px-4">
            <Search />
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col gap-4">
        {loading && <p>Carregando...</p>}
        {posts &&
          posts.map((post) => (
            <h3 className="text-orange-500 text-3xl font-bold w-full">
              {post.title}
            </h3>
          ))}
        {posts && posts.length === 0 && (
          <div className="flex gap-4 justify-between items-center">
            <p>Não foram encontrados posts</p>
            <Link
              to="/posts/create"
              className="bg-orange-500 hover:bg-opacity-80 transition ease-in-out duration-300 text-orange-950 font-semibold rounded-md px-4 py-2 text-center"
            >
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
