import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Matheus");

  return (
    <div className="text-center mt-12">
      <h2 className="text-2xl mt-4">Isso será exibido?</h2>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h2 className="text-2xl mt-4">If ternário</h2>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <div className="mt-4">
        <button className="text-normal text-slate-50 bg-cyan-500 hover:opacity-90 rounded-md px-4 py-2 mt-4" onClick={() => setName("João")}>Clica aqui!</button>
      </div>
    </div>
  );
};

export default CondicionalRender;
