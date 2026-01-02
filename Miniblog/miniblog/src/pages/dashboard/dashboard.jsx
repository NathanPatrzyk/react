import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/authContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import { Eye, SquarePen, Trash2 } from "lucide-react";

export function Dashboard() {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="text-zinc-50 pt-24 md:pt-32 p-8 md:p-16 flex flex-col items-center gap-8 w-screen max-w-2xl">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-orange-500 text-3xl font-bold w-full">Dashboard</h2>
        <p className="w-full">Gerencia os seus posts</p>
      </div>
      <div className="w-full flex flex-col gap-8">
        {posts && posts.length === 0 ? (
          <div className="flex gap-4 justify-between items-center">
            <p>Não foram encontrados posts</p>
            <Link
              to="/posts/create"
              className="bg-orange-500 hover:bg-opacity-80 transition ease-in-out duration-300 text-orange-950 font-semibold rounded-md px-4 py-2 text-center"
            >
              Criar primeiro post
            </Link>
          </div>
        ) : (
          <>
            <div className="flex gap-4 w-full justify-between border-b pb-3">
              <span>Título</span>
              <span>Ações</span>
            </div>

            {posts &&
              posts.map((post) => (
                <div
                  className="flex gap-4 w-full justify-between"
                  key={post.id}
                >
                  <p>{post.title}</p>
                  <div className="flex gap-2">
                    <Link to={`/posts/${post.id}`}>
                      <Eye />
                    </Link>
                    <Link to={`/posts/edit/${post.id}`}>
                      <SquarePen />
                    </Link>
                    <button
                      className="text-red-500"
                      onClick={() => deleteDocument(post.id)}
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
