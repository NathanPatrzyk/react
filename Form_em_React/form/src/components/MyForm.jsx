const MyForm = () => {
  return (
    <>
      <form className="flex flex-col p-12 w-96 max-w-[80%] bg-zinc-800 rounded-md">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl text-zinc-50 text-center font-bold border-b-4 border-zinc-50 rounded-sm pb-2 selected:border-none">
            Login
          </h2>
          <div className="flex flex-col gap-1">
            <label className="text-zinc-600 font-bold mx-2" htmlFor="name">NOME</label>
            <input className="bg-zinc-600 text-zinc-50 focus-visible:outline-0 border-2 border-transparent focus-visible:border-zinc-500 rounded-md p-2" type="text" name="name" placeholder="Digite o seu nome" />
          </div>
          <input className="bg-orange-500 hover:bg-orange-600 text-zinc-50 font-bold rounded-md p-2 px-16 mx-auto" type="submit" value="Enviar" />
        </div>
      </form>
    </>
  );
};

export default MyForm;
