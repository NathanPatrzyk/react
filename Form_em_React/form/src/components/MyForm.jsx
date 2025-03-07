import { useState } from "react";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);

    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <form
      className="bg-zinc-800 rounded-md p-8 sm:p-12 w-96 max-w-[80%]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4">
        <h2 className="rounded-sm text-2xl text-zinc-50 text-center font-bold border-b-4 border-zinc-50 selected:border-none pb-2 mb-4">
          Cadastre-se
        </h2>
        <label className="flex flex-col gap-1">
          <div className="text-zinc-600 font-bold mx-2">NOME</div>
          <input
            className="bg-zinc-600 rounded-md text-zinc-50 focus-visible:outline-0 border-2 border-transparent focus-visible:border-zinc-500 p-2"
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </label>
        <label className="flex flex-col gap-1">
          <div className="text-zinc-600 font-bold mx-2">E-MAIL</div>
          <input
            className="bg-zinc-600 rounded-md text-zinc-50 focus-visible:outline-0 border-2 border-transparent focus-visible:border-zinc-500 p-2"
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className="flex flex-col gap-1">
          <div className="text-zinc-600 font-bold mx-2">BIO</div>
          <textarea
            className="bg-zinc-600 rounded-md text-zinc-50 focus-visible:outline-0 border-2 border-transparent focus-visible:border-zinc-500 p-2"
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <label className="flex flex-col gap-1">
          <div className="text-zinc-600 font-bold mx-2">FUNÇÃO NO SISTEMA</div>
          <select
            className="bg-zinc-600 rounded-md text-zinc-50 focus-visible:outline-0 border-2 border-transparent focus-visible:border-zinc-500 p-2"
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input
          className="bg-orange-500 hover:bg-orange-600 rounded-md text-zinc-50 font-bold p-2 mx-auto mt-4 w-[160px] max-w-full"
          type="submit"
          value="Enviar"
        />
      </div>
    </form>
  );
};

export default MyForm;
