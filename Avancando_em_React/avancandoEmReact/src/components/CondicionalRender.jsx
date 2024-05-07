import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(false);

  return (
    <div className="text-center my-12">
      <h1 className="text-2xl mb-2">Isso será exibido?</h1>
			{x && <p>Se x for true, sim!</p>}
			{!x && <p>Agora x é falso</p>}
    </div>
  );
};

export default CondicionalRender;
