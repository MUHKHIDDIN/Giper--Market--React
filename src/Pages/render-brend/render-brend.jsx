import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";

export const RenderBrend = ({ brand, id, img, title, price, rame, color }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex cursor-pointer"
      onClick={() => navigate(`/CatalogSingle/${id}`)}
    >
      <div className="w-full max-w-sm mx-auto transform rounded-lg border p-4 shadow-lg transition-transform duration-300 hover:scale-105 bg-white">
        <div className="mb-4">
          <img
            src={img}
            alt={title}
            className="mx-auto h-36 w-36 rounded-lg object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h2>
          <p className="text-sm text-gray-600 mt-1 truncate">{brand}</p>
          <p className="text-sm text-gray-600 mt-1 truncate">{color}</p>
          <p className="text-lg font-semibold text-gray-900 mt-2">
            {price} Сум
          </p>
        </div>
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none">
            <AiOutlineEye />
          </button>
          <button className="bg-yellow-500 p-2 rounded-full text-white hover:bg-yellow-400 focus:outline-none">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};
