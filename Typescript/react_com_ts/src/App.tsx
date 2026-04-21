import { createContext } from "react";
import Destructuring, { Category } from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";
import Context from "./components/Context";

type textOrNull = string | null;

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  const name: string = "Nathan";
  const age: number = 21;
  const isWorking: boolean = true;

  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "opa";

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <h1>TypeScript no React</h1>

      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}

      <h3>{userGreeting(name)}</h3>

      <FirstComponent />
      <SecondComponent name="Segundo" />

      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        commentQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo post"
        content="Outro conteúdo"
        commentQty={5}
        tags={["python"]}
        category={Category.P}
      />

      <State />

      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}

      <Context />
    </AppContext.Provider>
  );
}

export default App;
