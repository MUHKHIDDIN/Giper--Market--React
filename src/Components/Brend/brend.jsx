import React from "react";

import { useBrend } from "./Service/query/use-brend";

export const Brend = () => {

  const { data, isLoading, error } = useBrend();

  

  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center text-red-500">Error loading brend data</h1>;
  }

  return (
    <div className="relative mx-auto my-10 w-[95%]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {data?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="transform cursor-pointer transition-transform hover:scale-105"
          >
            <div className="flex flex-col items-center bg-[#F8F8F8] shadow-md">
              <img
                className="h-[100px] w-[100px]"
                src={item.img}
                alt={item.text}
              />
              <p className="mt-3 text-center text-sm font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
