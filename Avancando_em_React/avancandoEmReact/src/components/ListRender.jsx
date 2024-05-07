import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Nathan", "Matheus", "Pedro", "Josias"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Nathan", age: 19 },
    { id: 2, name: "Matheus", age: 31 },
    { id: 3, name: "João", age: 28 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((preUsers) => {
      console.log(preUsers);
      return preUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center gap-12">
        <ul>
          {list.map((item, i) => (
            <li key={i} className="text-center">
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="text-center">
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button
          className="text-normal text-slate-50 bg-cyan-500 hover:opacity-90 rounded-md px-4 py-2 mt-4"
          onClick={deleteRandom}
        >
          Delete random user
        </button>
      </div>
    </div>
  );
};

export default ListRender;
