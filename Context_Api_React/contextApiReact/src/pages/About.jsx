import { useCounterContext } from "../hooks/useCounterContext";
import ChangeCounter from "../components/ChangeCounter";

const About = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <div className="h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className="text-orange-500 text-2xl font-bold">Sobre</h1>
        <p className="text-orange-100">Valor do contador: {counter}</p>
        <ChangeCounter />
      </div>
    </div>
  );
};

export default About;
