import { Link } from "react-router-dom";
import { PostDetails } from "../../components/postDetails";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className="text-zinc-50 pt-24 md:pt-32 p-8 md:p-16 flex flex-col items-center gap-8 w-screen max-w-2xl">
      <h2 className="text-orange-500 text-3xl font-bold w-full">Search</h2>
      <div className="w-full flex flex-col gap-8">
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className="flex gap-4 justify-between items-center">
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link
              to="/"
              className="bg-orange-500 hover:bg-opacity-80 transition ease-in-out duration-300 text-orange-950 font-semibold rounded-md px-4 py-2 text-center"
            >
              Voltar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
