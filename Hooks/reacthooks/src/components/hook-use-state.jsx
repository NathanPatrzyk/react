import { useState } from "react";

function HookUseState() {
  let userName = "Nathan";
  const [name, setName] = useState("Nathan");

  const changeNames = () => {
    userName = "Nathan Patrzyk";
    setName("Nathan Patrzyk");

    console.log(userName);
  };

  console.log(name);

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>

      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos!</p>
      <hr />
    </div>
  );
}

export { HookUseState };
