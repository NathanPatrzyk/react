import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { CircleX } from "lucide-react";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // TO DO
  };

  return (
    <div className="text-orange-50 pt-24 md:pt-32 p-8 md:p-16 flex flex-col items-center gap-8">
      <h2 className="text-orange-500 text-3xl font-bold">Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <label className="flex gap-4 justify-between">
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
        <label className="flex gap-4 justify-between">
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
        <label className="flex gap-4 justify-between">
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
        <label className="flex gap-4 justify-between">
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
    </div>
  );
}
