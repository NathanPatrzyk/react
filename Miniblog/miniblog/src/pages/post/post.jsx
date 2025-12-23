import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

export function Post() {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className="text-zinc-50 pt-24 md:pt-32 p-8 md:p-16 flex flex-col items-center gap-8 w-screen max-w-2xl">
      <div className="w-full flex flex-col gap-8">
        {loading && <p>Carregando post...</p>}
        {post && (
          <>
            <h2 className="text-orange-500 text-3xl font-bold w-full">
              {post.title}
            </h2>
            <div className="group border-2 border-zinc-800 rounded-2xl">
              <div className="w-full aspect-[15/10] overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <p>{post.body}</p>
            <div className="text-zinc-50 flex flex-wrap gap-2">
              {post.tagsArray.map((tag) => (
                <p
                  className="bg-orange-500 text-orange-950 px-2 py-1 rounded-full"
                  key={tag}
                >
                  <span className="font-bold">#</span>
                  {tag}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
