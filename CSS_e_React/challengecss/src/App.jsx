import CarDetails from "./components/CarDetails";

function App() {
  return (
    <div className="container mx-auto p-16 text-center">
      <h1 className="text-red-500 text-3xl font-bold pb-16">Challenge CSS</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <CarDetails
          brand="Ford"
          model="Mustang"
          color="Azul"
          value="R$ 200.000,00"
        />
        <CarDetails
          brand="Ford"
          model="Mustang"
          color="Azul"
          value="R$ 200.000,00"
        />
        <CarDetails
          brand="Ford"
          model="Mustang"
          color="Azul"
          value="R$ 200.000,00"
        />
        <CarDetails
          brand="Ford"
          model="Mustang"
          color="Azul"
          value="R$ 200.000,00"
        />
        <CarDetails
          brand="Ford"
          model="Mustang"
          color="Azul"
          value="R$ 200.000,00"
        />
      </div>
    </div>
  );
}

export default App;
