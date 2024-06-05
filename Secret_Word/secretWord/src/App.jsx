import { wordsList } from "./data/words";

import { useCallback, useEffect, useState } from "react";

import StartScreen from "./components/StartScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  return (
    <div className="flex justify-center items-center text-center px-8">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <StartScreen />}
      {gameStage === "end" && <StartScreen />}
    </div>
  );
}

export default App;
