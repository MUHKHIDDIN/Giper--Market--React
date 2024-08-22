import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGetSingle } from "../../Pages/Catalog-Single/Service/Query/use-get-single";
import { FaShoppingCart } from "react-icons/fa";

export const CatalogSingle = () => {
  const { data, isLoading, error } = useGetSingle();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-6">
          {Array(6)
            .fill()
            .map((_, index) => (
              <div
                className="h-[350px] w-full max-w-[250px] rounded-lg border p-4 shadow-lg bg-white"
                key={index}
              >
                <Skeleton className="mx-auto h-[200px] w-full rounded-lg" />
                <div className="mt-4">
                  {Array(5)
                    .fill()
                    .map((_, idx) => (
                      <Skeleton
                        key={idx}
                        className={`my-2 h-[20px] ${
                          idx === 4 ? "w-[100px]" : "w-full"
                        } rounded-lg`}
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-6">
        Ma'lumotlarni olishda xatolik yuz berdi.
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center">
        {data?.map((item) => (
          <div
            className="h-[400px] w-full ml-auto mr-auto max-w-[250px] overflow-hidden rounded-lg border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105 bg-white"
            key={item.id}
          >
            <img
              className="mx-auto h-[250px] w-full object-cover rounded-t-lg"
              src={item.img}
              alt={item.title}
            />
            <div className="p-4">
              <h2 className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 text-center truncate">
                {item.title}
              </h2>
              <p className="text-xs md:text-sm lg:text-sm text-gray-600 mt-1 text-center truncate">
                {item.brand}
              </p>
              <p className="text-xs md:text-sm lg:text-sm text-gray-600 mt-1 text-center truncate">
                {item.color}
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">
                  {item.price} Сум
                </p>
                <button className="bg-yellow-500 p-2 text-white rounded-full transition-colors hover:bg-yellow-400 focus:outline-none">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
