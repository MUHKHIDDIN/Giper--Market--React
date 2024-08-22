import React from "react";
import { useProductDetail } from "../Product-Dedail/Service/Query/use-Product-Detail";

export const ProductDetail = () => {
  const { data, isLoading, error } = useProductDetail();

  if (isLoading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Error fetching product details</p>
    );

  if (!data)
    return (
      <p className="text-center text-gray-600">No product details available</p>
    );

  return (
    <div className="container mx-auto mt-10 px-4 md:px-8 lg:px-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 overflow-x-auto p-4">
        {["Смартфоны и планшеты", "Ноутбуки, планшеты и компьютеры", "Техника для дома", "Игры и развлечения", "Телевизоры, Аудио-видео, Hi-Fi", "Фото и видеотехника", "Еще"].map((item, index) => (
          <p
            key={index}
            className="cursor-pointer text-gray-600 hover:text-gray-800 whitespace-nowrap"
          >
            {item}
          </p>
        ))}
      </div>

      <div className="mb-8">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
          <span className="text-gray-600">Главная </span>/ Смартфоны и планшеты
        </h1>
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 transition-colors duration-300 hover:text-yellow-500">
        {data.title}
      </h1>

      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <img
            src={data.img}
            alt="Product"
            className="w-full h-auto object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex-1">
          <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            Характеристики
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-gray-800">Объем: </span>
              {data.rame}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-gray-800">Цвет: </span>
              {data.color}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-gray-800">Бренд: </span>
              {data.brand}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            ${data.price} Сум
          </p>
          <button className="w-full max-w-[300px] rounded-lg bg-yellow-400 px-6 py-2 font-semibold text-black transition-transform duration-300 hover:scale-105 hover:bg-yellow-500">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};
