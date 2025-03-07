import React from "react";

const RenderIsUserOver18Years = ({ age }) => {
  if (age >= 18) {
    return (
      <div>
        <p className="text-green-200 text-center italic">Pode tirar carteira de habilitação</p>
      </div>
    );
  }
	else {
		return (
      <div>
        <p className="text-green-200 text-center italic">Não pode tirar carteira de habilitação</p>
      </div>
    );
	}
};

export default RenderIsUserOver18Years;
