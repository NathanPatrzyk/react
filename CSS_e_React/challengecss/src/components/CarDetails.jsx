import React from "react";

const CarDetails = ({ brand, model, color, value }) => {
  return (
    <div className="bg-slate-900 p-4 mx-auto w-full rounded-md">
      <figure className="max-w-40 mx-auto rounded-md font-medium">
        <img className="w-full" src="/car.png" />
      </figure>
      <div className="flex flex-col gap-1 justify-center pt-4">
        <p className="text-red-500 text-xl text-center font-bold">{brand}</p>
        <p className="text-red-500 text-2xl text-center pb-4">{model}</p>
        <p className="text-red-50 text-center">{color}</p>
        <p className="text-red-50 text-center pb-4">{value}</p>
      </div>
    </div>
  );
};

export default CarDetails;
