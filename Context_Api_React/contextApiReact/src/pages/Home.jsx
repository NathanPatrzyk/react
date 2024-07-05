import ChangeCounter from "../components/ChangeCounter";

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();

  return (
    <div>
      <div className="h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className={`text-${color}-500 text-2xl font-bold`}>Home</h1>
        <p className="text-orange-100">Valor do contador: {counter}</p>
        <ChangeCounter />
      </div>
    </div>
  );
};

export default Home;
