import { Link } from "react-router-dom";

export function PostDetails({ post }) {
  return (
    <Link
      className="group border-2 border-zinc-800 rounded-2xl"
      to={`/posts/${post.id}`}
    >
      <div className="w-full aspect-[15/10] overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-orange-500 text-2xl font-bold w-full">
          {post.title}
        </h2>
        <p className="text-zinc-400">{post.createdBy}</p>
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
      </div>
    </Link>
  );
}
