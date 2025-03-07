import React from "react";

const CarDetails = ({ brand, model, color, value }) => {
  return (
    <div className="bg-slate-900 p-2 md:p-4 mx-auto w-full rounded-md border-4 border-transparent hover:border-red-500">
      <figure className="max-w-40 mx-auto rounded-md font-medium py-2 md:py-4">
        <img className="w-full" src="/car.png" />
      </figure>
      <div className="flex flex-col gap-2 md:gap-4 justify-center">
        <p className="text-red-500 text-xl text-center font-bold pt-1 md:pt-2">{brand}</p>
        <p className="text-red-500 text-2xl text-center pt-1 md:pb-2">{model}</p>
        <p className="text-red-50 text-center">{color}</p>
        <p className="text-red-50 text-center">{value}</p>
      </div>
    </div>
  );
};

export default CarDetails;
