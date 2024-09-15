import React from "react";

export const AnimatedTooltip = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      {[1, 2, 3].map((item) => (
        <div className="-mr-2  relative group" key={item}>
          <div className="object-cover !m-0 !p-0 object-top rounded-full h-8 w-8 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500 bg-blue-600"></div>
        </div>
      ))}
    </div>
  );
};
