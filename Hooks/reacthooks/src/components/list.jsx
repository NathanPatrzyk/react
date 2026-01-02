import { useEffect, useState } from "react";

function List({ getItems }) {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando dados do DB...");
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      {myItems && myItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export { List };
