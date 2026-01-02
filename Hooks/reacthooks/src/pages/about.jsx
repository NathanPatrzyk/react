import { useContext } from "react";
import { SomeContext } from "../components/hook-use-context";

function About() {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h2>About</h2>
      <p>Valor do context: {contextValue}</p>
    </div>
  );
}

export { About };
