import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });

    
  };

  return (
    <div className="md:py-4 py-2">
      <h1 className="text-3xl text-cyan-500 text-center font-bold md:px-8 px-4 md:py-4 py-2">
        Lista de Produtos
      </h1>
      <div className="flex flex-col md:gap-4 gap-2 md:px-8 px-4 md:py-4 py-2 text-center">
        {products.map((product) => (
          <div key={product.id}>
            <p className="text-cyan-900">
              <strong className="text-cyan-500">{product.name}</strong> - R${" "}
              {product.price}
            </p>
          </div>
        ))}
      </div>
      <div className="md:px-8 px-4 md:py-4 py-2">
        <form
          className="flex flex-col gap-2 items-center"
          onSubmit={handleSubmit}
        >
          <label className="text-cyan-500 font-bold">
            Nome:{" "}
            <input
              className="text-cyan-900 font-normal bg-cyan-100 block border-2 border-cyan-500 rounded-md p-0.5 w-48"
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="text-cyan-500 font-bold">
            Preço:{" "}
            <input
              className="text-cyan-900 font-normal bg-cyan-100 block border-2 border-cyan-500 rounded-md p-0.5 w-48"
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input
            className="text-cyan-100 font-bold bg-cyan-500 hover:bg-cyan-600 rounded-md p-0.5 w-48"
            type="submit"
            value="Criar"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
