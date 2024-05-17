import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    { brand: "Toyota", model: "Corolla", color: "Branco", value: "R$ 160.000" },
    { brand: "Ford", model: "Mustang", color: "Vermelho", value: "R$ 500.000" },
    {
      brand: "Chevrolet",
      model: "Camaro",
      color: "Preto",
      value: "R$ 490.000",
    },
    { brand: "Honda", model: "Civic", color: "Prata", value: "R$ 160.000" },
    { brand: "BMW", model: "M3", color: "Branco", value: "R$ 600.000" },
    {
      brand: "Mercedes-Benz",
      model: "AMG GT Coupé",
      color: "Preto",
      value: "R$ 800.000",
    },
    { brand: "Audi", model: "R8", color: "Vermelho", value: "R$ 1.200.000" },
    { brand: "Porsche", model: "911", color: "Azul", value: "R$ 900.000" },
    { brand: "Nissan", model: "GT-R", color: "Cinza", value: "R$ 1.000.000" },
  ];
  return (
    <div className="container mx-auto p-8 md:p-16 text-center">
      <h1 className="text-red-500 text-3xl font-bold pb-8 md:pb-16">
        Carros Disponíveis
      </h1>
      <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarDetails
            brand={car.brand}
            model={car.model}
            color={car.color}
            value={car.value}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
