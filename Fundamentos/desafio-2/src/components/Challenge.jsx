import React from "react";

const Challenge = () => {
  const valueA = 10;
  const valueB = 40;
  return (
    <div className="py-12 p-4 flex justify-center gap-2 md:w-full mx-auto bg-slate-900 w-screen h-screen">
      <div>
        <h2 className="py-1 text-3xl text-orange-200">{valueA}</h2>
      </div>
      <div>
        <h2 className="py-1 text-3xl text-orange-200">+</h2>
      </div>
      <div>
        <h2 className="py-1 text-3xl text-orange-200">{valueB}</h2>
      </div>
      <div>
        <button
          onClick={() => {console.log(valueA+valueB)}}
          className="px-4 mx-2 py-1 text-center text-3xl bg-orange-500 text-orange-200 rounded-md hover:opacity-80"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Challenge;
