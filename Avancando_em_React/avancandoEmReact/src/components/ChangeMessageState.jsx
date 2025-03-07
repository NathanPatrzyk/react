import React from "react";

const ChangeMessageState = ({ handleMessage }) => {
  const messages = ["Oi", "Olá", "Oi, tudo bem?"];

  return (
    <div className="flex gap-4 justify-center pb-12">
      <button
        className="text-normal text-slate-50 bg-cyan-500 hover:opacity-90 rounded-md px-4 py-2"
        onClick={() => handleMessage(messages[0])}
      >
        1
      </button>
      <button
        className="text-normal text-slate-50 bg-cyan-500 hover:opacity-90 rounded-md px-4 py-2"
        onClick={() => handleMessage(messages[1])}
      >
        2
      </button>
      <button
        className="text-normal text-slate-50 bg-cyan-500 hover:opacity-90 rounded-md px-4 py-2"
        onClick={() => handleMessage(messages[2])}
      >
        3
      </button>
    </div>
  );
};

export default ChangeMessageState;
