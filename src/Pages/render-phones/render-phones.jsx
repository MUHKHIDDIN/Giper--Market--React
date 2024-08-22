import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

export const RenderPhones = ({ id, img, title, price, rame, color, brand }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col cursor-pointer w-full max-w-xs mx-auto bg-white border rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      onClick={() => navigate(`/product-detail/${id}`)}
    >
      <div className="flex justify-center p-4">
        <img
          src={img}
          alt={title}
          className="h-36 w-36 rounded-lg object-cover"
        />
      </div>
      <div className="p-4">
        <p className="mb-2 text-sm font-semibold text-gray-900 truncate">{title}</p>
        <p className="text-sm text-gray-600 truncate">{rame}</p>
        <p className="text-sm text-gray-600 truncate">{color}</p>
        <p className="text-sm text-gray-600 truncate">{brand}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-semibold text-black">{price} Сум</p>
          <div className="relative group">
            <button className="relative bg-yellow-500 p-2 text-white rounded-full transition-colors duration-300 hover:bg-yellow-400 focus:outline-none">
              <FaShoppingCart size={24} />
              <div className="absolute inset-0 flex items-center justify-center bg-black rounded-full opacity-0 transition-opacity group-hover:opacity-100">
                <AiOutlineEye className="text-white" size={24} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
