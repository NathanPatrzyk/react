import { useState, useEffect } from "react";

export function Register() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 md:pt-32 p-8 md:p-16 min-h-[80vh] gap-4 md:gap-8">
      <h1 className="text-orange-600 text-3xl font-bold">
        Cadastre-se para postar
      </h1>
      <form className="flex flex-col">
        <label className="flex gap-4 justify-between">
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
          />
        </label>
        <label className="flex gap-4 justify-between">
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
          />
        </label>
        <label className="flex gap-4 justify-between">
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
          />
        </label>
        <label className="flex gap-4 justify-between">
          <span>Confirmação de Senha: </span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
          />
        </label>
        <button className="w-full bg-orange-600 hover:opacity-80 transition ease-in-out duration-300 text-orange-50 font-semibold rounded-md px-4 py-2 mt-4 md:mt-8">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
