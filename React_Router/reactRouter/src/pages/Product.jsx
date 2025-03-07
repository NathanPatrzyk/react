import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);
  return (
    <div>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1 className="text-slate-50 text-3xl font-bold md:py-8 py-4">
            {product.name}
          </h1>
          <p className="text-slate-50 py-2">R$ {product.price}</p>
          <button className="transition ease-in-out duration-300 bg-sky-500 hover:bg-sky-600  text-slate-950 rounded-md px-4 py-2 my-2">
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
