export function Register() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 w-screen">
      <div className="bg-[url('/img.webp')] sm:bg-none col-span-2 lg:col-span-1 flex items-center justify-center">
        <div className="bg-zinc-900 flex flex-col p-8 gap-6 max-w-full my-32 mx-8 rounded-md">
          <h1 className="text-orange-600 text-3xl text-center font-bold">
            Cadastre-se para postar!
          </h1>
          <p className="text-center">Crie seu usuáro e compartilhe suas histórias:</p>
          <form className="flex flex-col gap-6">
            <label className="flex gap-4 justify-between">
              <input
                className="text-zinc-500 hover:text-zinc-400 focus:text-zinc-400 active:text-zinc-400 box-border bg-transparent hover:bg-zinc-800/30 focus:bg-zinc-800/30 active:bg-zinc-800/30 ring-1 ring-zinc-800/80 hover:ring-zinc-700 focus:outline-none focus:ring-orange-600 active:outline-none active:ring-orange-600 rounded-md px-4 py-2 w-full transition ease-in-out duration-300"
                type="text"
                name="displayName"
                required
                placeholder="Nome do usuário:"
              />
            </label>
            <label className="flex gap-4 justify-between">
              <input
                className="text-zinc-500 hover:text-zinc-400 focus:text-zinc-400 active:text-zinc-400 box-border bg-transparent hover:bg-zinc-800/30 focus:bg-zinc-800/30 active:bg-zinc-800/30 ring-1 ring-zinc-800/80 hover:ring-zinc-700 focus:outline-none focus:ring-orange-600 active:outline-none active:ring-orange-600 rounded-md px-4 py-2 w-full transition ease-in-out duration-300"
                type="email"
                name="email"
                required
                placeholder="E-mail do usuário:"
              />
            </label>
            <label className="flex gap-4 justify-between">
              <input
                className="text-zinc-500 hover:text-zinc-400 focus:text-zinc-400 active:text-zinc-400 box-border bg-transparent hover:bg-zinc-800/30 focus:bg-zinc-800/30 active:bg-zinc-800/30 ring-1 ring-zinc-800/80 hover:ring-zinc-700 focus:outline-none focus:ring-orange-600 active:outline-none active:ring-orange-600 rounded-md px-4 py-2 w-full transition ease-in-out duration-300"
                type="password"
                name="password"
                required
                placeholder="Insira sua senha:"
              />
            </label>
            <label className="flex gap-4 justify-between">
              <input
                className="text-zinc-500 hover:text-zinc-400 focus:text-zinc-400 active:text-zinc-400 box-border bg-transparent hover:bg-zinc-800/30 focus:bg-zinc-800/30 active:bg-zinc-800/30 ring-1 ring-zinc-800/80 hover:ring-zinc-700 focus:outline-none focus:ring-orange-600 active:outline-none active:ring-orange-600 rounded-md px-4 py-2 w-full transition ease-in-out duration-300"
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirme sua senha:"
              />
            </label>
            <button className="w-full bg-orange-600 hover:bg-opacity-80 transition ease-in-out duration-300 text-orange-950 font-semibold rounded-md px-4 py-2">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[url('/img.webp')] bg-center bg-cover"></div>
    </div>
  );
}
