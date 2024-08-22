import React from "react";
import { useAds } from "../Ads/Service/Query/use-Ads";

export const Ads = () => {
  const { data } = useAds();

  return (
    <div className="bg-[#C22D41] p-4 sm:p-6 md:p-8 lg:p-12">
      <h2 className="mb-4 text-2xl font-bold text-[#ffffff] text-center">Акции</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {data?.map((item) => (
          <div
            key={item.id}
            className="relative transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-[200px] w-full object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 p-2">
              <h3 className="text-lg font-semibold text-white text-center">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
