import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button
        className="transition ease-in-out duration-300 bg-orange-500 hover:bg-orange-600  text-green-950 rounded-md px-4 py-2 my-2"
        onClick={() => setCounter(counter + 1)}
      >
        Add value to counter
      </button>
    </div>
  );
};

export default ChangeCounter;
