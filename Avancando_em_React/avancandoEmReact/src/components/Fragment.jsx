import React from "react";

const Fragment = ({propFragment}) => {
  return (
    <>
      <h2 className="text-2xl text-center font-bold my-4 mt-6">Primeiro título</h2>
      <h3 className="text-xl text-center font-bold my-4">Segundo título</h3>
      <h4 className="text-center font-bold my-4 mb-6">{propFragment}</h4>
    </>
  );
};

export default Fragment;
