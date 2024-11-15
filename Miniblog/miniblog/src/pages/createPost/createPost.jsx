import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-orange-50 pt-24 md:pt-32 p-8 md:p-16 flex flex-col items-center gap-8">
      <h2 className="text-orange-600 text-3xl font-bold">Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <label classname="flex gap-4 justify-between">
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense num bom título:"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label classname="flex gap-4 justify-between">
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa o seu post:"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label classname="flex gap-4 justify-between">
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post:"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label classname="flex gap-4 justify-between">
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula:"
            onChange={(e) => setTags(e.target.value)}
            value={image}
          />
        </label>
        <button className="w-full bg-orange-600 hover:bg-opacity-80 transition ease-in-out duration-300 text-orange-950 font-semibold rounded-md px-4 py-2">
          Cadastrar
        </button>
        {/*
        {!loading && (
          <button className="w-full bg-orange-600 hover:bg-opacity-80 transition ease-in-out duration-300 text-orange-950 font-semibold rounded-md px-4 py-2">
            Cadastrar
          </button>
        )}
        {loading && (
          <button
            className="w-full bg-orange-600 bg-opacity-60 transition ease-in-out duration-300 text-orange-950 font-semibold rounded-md px-4 py-2"
            disabled
          >
            Aguarde...
          </button>
        )}
        {error && (
          <div className="bg-red-600/20 text-red-600 backdrop-blur-md fixed top-16 left-0 p-4 m-8 rounded-md ring-2 ring-red-600">
            <p className="text-center font-bold flex items-center gap-2">
              <CircleX className="text-red-600 size-5" />
              {error}
            </p>
          </div>
        )}*/}
      </form>
    </div>
  );
}
