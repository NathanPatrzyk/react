import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/authContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { CircleX } from "lucide-react";

export function EditPost() {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();

  const { updateDocument, response } = useUpdateDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    navigate("/dashboard");
  };

  return (
    <div className="text-zinc-50 p-8 md:p-16 pt-24 md:pt-32 flex flex-col items-center gap-8 w-screen max-w-2xl">
      {post && (
        <>
          <h2 className="text-orange-500 text-3xl w-full font-bold">
            Editando post: {post.title}
          </h2>
          <p className="w-full">Altere os dados do post como desejar</p>
          <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2 justify-between">
              <span>Título:</span>
              <input
                className="text-zinc-500 hover:text-zinc-400 focus:text-zinc-400 active:text-zinc-400 box-border bg-transparent hover:bg-zinc-800/30 focus:bg-zinc-800/30 active:bg-zinc-800/30 ring-1 ring-zinc-800/80 hover:ring-zinc-700 focus:outline-none focus:ring-orange-500 active:outline-none active:ring-orange-500 rounded-md px-4 py-2 w-full transition ease-in-out duration-300"
                type="text"
                name="title"
                required
                placeholder="Pense num bom título:"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label className="flex flex-col gap-2 justify-between">
              <span>URL da imagem:</span>
              <input
                className="text-zinc-500 hover:text-zinc-400 focus:text-zinc-400 active:text-zinc-400 box-border bg-transparent hover:bg-zinc-800/30 focus:bg-zinc-800/30 active:bg-zinc-800/30 ring-1 ring-zinc-800/80 hover:ring-zinc-700 focus:outline-none focus:ring-orange-500 active:outline-none active:ring-orange-500 rounded-md px-4 py-2 w-full transition ease-in-out duration-300"
                type="text"
                name="image"
                required
                placeholder="Insira uma imagem que representa o seu post:"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </label>
            <p>Preview da imagem atual:</p>
            <div className="w-full aspect-[15/10] overflow-hidden rounded-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <label className="flex flex-col gap-2 justify-between">
              <span>Conteúdo:</span>
              <textarea
                className="text-zinc-500 hover:text-zinc-400 focus:text-zinc-400 active:text-zinc-400 box-border bg-transparent hover:bg-zinc-800/30 focus:bg-zinc-800/30 active:bg-zinc-800/30 ring-1 ring-zinc-800/80 hover:ring-zinc-700 focus:outline-none focus:ring-orange-500 active:outline-none active:ring-orange-500 rounded-md px-4 py-2 w-full transition ease-in-out duration-300"
                name="body"
                required
                placeholder="Insira o conteúdo do post:"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              ></textarea>
            </label>
            <label className="flex flex-col gap-2 justify-between">
              <span>Tags:</span>
              <input
                className="text-zinc-500 hover:text-zinc-400 focus:text-zinc-400 active:text-zinc-400 box-border bg-transparent hover:bg-zinc-800/30 focus:bg-zinc-800/30 active:bg-zinc-800/30 ring-1 ring-zinc-800/80 hover:ring-zinc-700 focus:outline-none focus:ring-orange-500 active:outline-none active:ring-orange-500 rounded-md px-4 py-2 w-full transition ease-in-out duration-300"
                type="text"
                name="tags"
                required
                placeholder="Insira as tags separadas por vírgula:"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </label>

            {!response.loading && (
              <button className="w-full bg-orange-500 hover:bg-opacity-80 transition ease-in-out duration-300 text-orange-950 font-semibold rounded-md px-4 py-2">
                Cadastrar
              </button>
            )}
            {response.loading && (
              <button
                className="w-full bg-orange-500 bg-opacity-60 transition ease-in-out duration-300 text-orange-950 font-semibold rounded-md px-4 py-2"
                disabled
              >
                Aguarde...
              </button>
            )}
            {(response.error || formError) && (
              <div className="bg-red-600/20 text-red-600 backdrop-blur-md fixed top-16 left-0 p-4 m-8 rounded-md ring-2 ring-red-600">
                <p className="text-center font-bold flex items-center gap-2">
                  <CircleX className="text-red-600 size-5" />
                  {response.error || formError}
                </p>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
}
