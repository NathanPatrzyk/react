import ChangeCounter from "../components/ChangeCounter";

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Products = () => {
  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <div className="h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className={`text-2xl font-bold ${color}`}>Produtos</h1>
        <p className="text-orange-100">Valor do contador: {counter}</p>
        <ChangeCounter />
        <div className="flex gap-4">
          <button
            className="transition ease-in-out duration-300 bg-red-500 hover:bg-red-600  text-neutral-950 rounded-md px-4 py-2"
            onClick={() => setTitleColor("RED")}
          >
            Vermelho
          </button>
          <button
            className="transition ease-in-out duration-300 bg-purple-500 hover:bg-purple-600  text-neutral-950 rounded-md px-4 py-2"
            onClick={() => setTitleColor("PURPLE")}
          >
            Roxo
          </button>
          <button
            className="transition ease-in-out duration-300 bg-blue-500 hover:bg-blue-600  text-neutral-950 rounded-md px-4 py-2"
            onClick={() => setTitleColor("BLUE")}
          >
            Azul
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
