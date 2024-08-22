import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaOdnoklassnikiSquare, FaInstagram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { GrYoutube } from "react-icons/gr";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 container-x">
        {/* Main section */}
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Logo and contact section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img className="mb-4" src="header-logo.svg" alt="logo" />
            <a
              href="tel:+998933746644"
              className="block text-gray-800 transition duration-300 hover:text-red-700"
            >
              +99 893 374-66-44
            </a>
            <p className="text-gray-500">справочная служба</p>
            <a
              href="tel:+998902537753"
              className="block text-gray-800 transition duration-300 hover:text-red-700"
            >
              +99 890 253-77-53
            </a>
            <p className="text-gray-500">интернет-магазин</p>
            <p className="mt-4 text-gray-800">Оставайтесь на связи</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 p-2 text-white"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook2 />
              </a>
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 p-2 text-white"
                href="https://ok.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaOdnoklassnikiSquare />
              </a>
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 p-2 text-white"
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialVkontakte />
              </a>
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 p-2 text-white"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrYoutube />
              </a>
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 p-2 text-white"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Links section */}
          <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between text-gray-800 space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-2">
              <p>Условия обмена и возврата</p>
              <p>Каталог</p>
              <p>О компании</p>
              <p>Контакты</p>
              <p>Доставка</p>
              <p>Оплата</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Клиентам</p>
              <p>Личный кабинет</p>
              <p>Блог</p>
              <p>Обратная связь</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Информация</p>
              <p>Пользовательское соглашение</p>
              <p>Политика конфиденциальности и оферта</p>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-gray-500">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-center md:text-left">
              © 2022 Любое использование контента без письменного разрешения запрещено
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-0">
              <a
                href="https://payme.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/0760cb162938351.Y3JvcCw0MzE0LDMzNzUsOTYsMA.jpg"
                  alt="Payme"
                  className="h-4"
                />
              </a>
              <a
                href="https://uzcard.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://podrobno.uz/upload/iblock/8a7/199371846_1714165255433210_2433108245632083833_n.jpg"
                  alt="UZCARD"
                  className="h-4"
                />
              </a>
              <a
                href="https://humocard.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://humocard.uz/upload/medialibrary/208/8x0p9hi3h9jww0flwdm92dayhn0flulj/humo-logo-more.png"
                  alt="Humo"
                  className="h-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
