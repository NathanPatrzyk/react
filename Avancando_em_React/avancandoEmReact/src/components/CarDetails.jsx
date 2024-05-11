import React from "react";

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div className="m-12 text-center">
      <h2 className="text-2xl font-bold text-cyan-500">Detalhes do Carro</h2>
      <div className="flex gap-8 mt-4 justify-center">
        <div><span className="font-bold">Marca:</span> {brand}</div>
        <div><span className="font-bold">KM:</span> {km}</div>
        <div><span className="font-bold">Cor:</span> {color}</div>
      </div>
      {newCar && <p>Este carro é novo!</p>}
    </div>
  );
};

export default CarDetails;
