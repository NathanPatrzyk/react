import React from "react";
import RenderIsUserOver18Years from "./RenderIsUserOver18Years";

const UserDetails = ({ name, age, profession }) => {
  return (
    <div className="bg-green-600 text-green-50 p-4 mx-auto w-full rounded-md">
      <figure className="bg-green-500 p-4 flex justify-center rounded-md font-medium">
        <img className="h-24 w-24" src="/user.webp" />
      </figure>
      <div className="flex flex-col gap-1 justify-center pt-4">
        <p className="text-2xl text-center">{name}</p>
        <p className="text-green-200 text-center pb-4">{profession}</p>
        <p className="text-center">Age:</p>
        <p className="text-center pb-4">{age}</p>
        <RenderIsUserOver18Years age={age} />
      </div>
    </div>
  );
};

export default UserDetails;
