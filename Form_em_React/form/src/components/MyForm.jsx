import { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);

  return (
    <form className="bg-zinc-800 rounded-md p-8 sm:p-12 w-96 max-w-[80%]">
      <div className="flex flex-col gap-4">
        <h2 className="rounded-sm text-2xl text-zinc-50 text-center font-bold border-b-4 border-zinc-50 selected:border-none pb-2 mb-4">
          Login
        </h2>
        <label className="flex flex-col gap-1">
          <div className="text-zinc-600 font-bold mx-2">NOME</div>
          <input
            className="bg-zinc-600 rounded-md text-zinc-50 focus-visible:outline-0 border-2 border-transparent focus-visible:border-zinc-500 p-2"
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
          />
        </label>
        <label className="flex flex-col gap-1">
          <div className="text-zinc-600 font-bold mx-2">E-MAIL</div>
          <input
            className="bg-zinc-600 rounded-md text-zinc-50 focus-visible:outline-0 border-2 border-transparent focus-visible:border-zinc-500 p-2"
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
          />
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
