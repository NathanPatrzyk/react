import { useState } from "react";
import UserDetails from "./components/UserDetails";

function App() {
  const users = [
    { name: "Ana", age: 25, profession: "Desenvolvedora Frontend" },
    { name: "Bruno", age: 40, profession: "Engenheiro de Software" },
    { name: "Clara", age: 16, profession: "Estudante" },
    { name: "Diego", age: 18, profession: "Desenvolvedor Backend" },
    { name: "Eduardo", age: 14, profession: "Estudante" },
  ];
  return (
    <div className="container mx-auto p-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user, index) => (
          <UserDetails
            key={index}
            name={user.name}
            age={user.age}
            profession={user.profession}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
