import React, { useState } from "react";
import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Catalog } from "../../Pages/Catalog/catalog";
import { Search } from "../../Components/Search/Search";
import { GiSelfLove } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCatalog, setSelectedCatalog] = useState(null);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleCatalogClick = (catalog) => {
    setSelectedCatalog(catalog);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <header className="border-b border-gray-200 pb-4">
        <div className="flex flex-wrap gap-4 justify-end text-sm text-gray-700">
          <div className="flex space-x-4">
            <p className="transition-colors duration-300 hover:text-blue-800">
              Доставка и оплата
            </p>
            <p className="transition-colors duration-300 hover:text-blue-800">
              Пункты выдачи
            </p>
            <p className="transition-colors duration-300 hover:text-blue-800">
              Поддержка
            </p>
            <a
              href="#"
              className="flex items-center gap-2 transition-colors duration-300 hover:text-blue-800"
            >
              <FaPhoneAlt className="text-gray-600" />
              <span className="hidden lg:inline">+998 90 253 77 53</span>
            </a>
          </div>
        </div>

        <nav className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <img
            src="header-logo.svg"
            alt="Logo"
            className="w-36 sm:w-48 md:w-60 lg:w-72"
          />
          <button
            onClick={handleModalToggle}
            className="flex items-center gap-2 rounded-lg bg-yellow-600 px-4 py-2 text-white shadow-md transition-colors duration-300 hover:bg-yellow-700"
          >
            <IoMdMenu className="text-xl" />
            <span className="hidden sm:inline">Каталог</span>
          </button>
          <div className="w-full sm:w-auto sm:flex-1">
            <Search />
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-700">
            <div className="group relative">
              <button className="flex items-center gap-2 rounded-lg bg-yellow-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-yellow-700">
                <RiAccountCircleFill size={24} />
                <span className="ml-2 hidden md:inline">Войти</span>
              </button>
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <RiAccountCircleFill size={24} className="text-white" />
              </div>
            </div>
            <div className="group relative">
              <button className="flex items-center gap-2 rounded-lg bg-yellow-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-yellow-700">
                <GiSelfLove size={24} />
                <span className="ml-2 hidden md:inline">Избранное</span>
              </button>
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <GiSelfLove size={24} className="text-white" />
              </div>
            </div>
            <div className="group relative">
              <button className="flex items-center gap-2 rounded-lg bg-yellow-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-yellow-700">
                <FaShoppingCart size={24} />
                <span className="ml-2 hidden md:inline">Корзина</span>
              </button>
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaShoppingCart size={24} className="text-white" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={handleCloseModal}
        >
          <div className="w-full max-w-3xl rounded-lg bg-white p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
              Каталог
            </h2>
            <ul className="space-y-4">
              <Catalog onCatalogClick={handleCatalogClick} />
            </ul>
            <button
              onClick={handleModalToggle}
              className="mt-4 rounded-lg bg-yellow-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-yellow-700"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
