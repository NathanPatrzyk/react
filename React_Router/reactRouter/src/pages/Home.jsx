import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1 className="text-slate-50 text-3xl font-bold md:py-8 py-4">
        Produtos
      </h1>
      {error && <p>{error}</p>}
      <div className="flex justify-center flex-wrap md:pb-8 pb-4 gap-2">
        {items &&
          items.map((item) => (
            <div
              className="transition ease-in-out duration-300 border-2 border-slate-800 hover:border-slate-700 rounded-md w-64 py-2"
              key={item.id}
            >
              <p className="text-slate-50 py-2">
                <h2 className="text-sky-500 text-xl font-bold py-2">
                  {item.name}
                </h2>
                <p className="py-2">R$ {item.price}</p>
                <button className="transition ease-in-out duration-300 bg-sky-500 hover:bg-sky-600  text-slate-950 rounded-md px-4 py-2 my-2">
                  <Link to={`/products/${item.id}`}>Detalhes</Link>
                </button>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
