import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-orange-500 text-2xl font-bold ">Home</h1>
        <p>Valor do contador: {counter}</p>
      </div>
    </div>
  );
};

export default Home;
