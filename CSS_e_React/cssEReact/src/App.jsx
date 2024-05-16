import { useState } from "react";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Nathan");
  const redTitle = true

  return (
    <div className="text-center">
      <h1 className="text-3xl text-red-500 p-4">React com CSS</h1>
      <MyComponent />
      <p className="text-red-500 bg-slate-950 p-8 border-t-4 border-t-red-500">
        Este elemento foi estilizado de forma inline
      </p>
      <h2
        className={
          n < 10 ? `text-2xl text-purple-500 p-4` : `text-2xl text-pink-500 p-4`
        }
      >
        CSS dinâmico
      </h2>
      <h2
        className={
          n > 10 ? `text-2xl text-purple-500 p-4` : `text-2xl text-pink-500 p-4`
        }
      >
        CSS dinâmico
      </h2>
      <h2
        className={
          n > 10 ? `text-2xl text-purple-500 p-4` : `text-2xl text-pink-500 p-4`
        }
      >
        CSS dinâmico
      </h2>
      <h2
        className={
          name === "Nathan" ? `text-2xl text-green-500 bg-slate-950 p-4` : null
        }
      >
        Teste nome
      </h2>
      <h2
        className={ redTitle ? `text-2xl text-red-500 bg-slate-950 p-4  border-4 border-red-500` : `text-2xl text-slate-50 bg-slate-950 p-4`
        }>Este título vai ter classe dinâmica</h2>
        <Title />
        <h2 className="text-2xl p-4">Testando</h2>
    </div>
  );
}

export default App;
