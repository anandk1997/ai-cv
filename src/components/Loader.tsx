import React from "react";
import { PropagateLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <PropagateLoader size={35} color={"#0075FF"} />
    </div>
  );
};
