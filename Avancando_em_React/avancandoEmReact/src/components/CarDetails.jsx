import React from "react";

const CarDetails = ({branch, km, color}) => {
  return (
    <div className="m-12 text-center">
      <h2 className="text-2xl font-bold text-cyan-500">Detalhes do Carro</h2>
      <div className="flex gap-8 mt-4 justify-center">
        <div><span className="font-bold">Marca:</span> {branch}</div>
        <div><span className="font-bold">KM:</span> {km}</div>
        <div><span className="font-bold">Cor:</span> {color}</div>
      </div>
    </div>
  );
};

export default CarDetails;
