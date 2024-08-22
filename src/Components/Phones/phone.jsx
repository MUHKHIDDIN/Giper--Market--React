import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePhone } from "../Phones/Service/query/use-phone";
import { RenderPhones } from "../../Pages/render-phones/render-phones";

export const Phone = () => {
  const { data } = usePhone();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative mx-auto my-10 px-4 sm:px-6 lg:px-8 w-full">
      <h1 className="text-3xl font-bold mb-4 text-center">Смартфоны и планшеты</h1>
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id} className="p-2 sm:p-4">
            <RenderPhones {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
