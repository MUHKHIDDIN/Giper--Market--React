import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useComputersProduct } from "../../Components/computers -Product/Service/query/use-computers-product";
import { RenderComputers } from "../../Pages/Render-camuters/render-comuters";

export const ComputersProduct = () => {
  const { data } = useComputersProduct();

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
    <div className="relative mx-auto my-10 px-4 lg:px-8 w-full">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Ноутбуки, планшеты и компьютеры</h1>
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id} className="p-2 sm:p-4">
            <RenderComputers {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
