import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetCatalog } from "../../Pages/Catalog/Service/Query/use-get-catalog";

export const Catalog = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetCatalog();

  const handleClick = (name) => {
    navigate(`/catalog-single/${name}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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

  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (error) {
    return (
      <h1 className="text-center text-red-500">Error loading catalog data</h1>
    );
  }

  return (
    <div className="relative mx-auto my-10 px-4 sm:px-6 lg:px-8 w-full">
      <Slider {...settings}>
        {data?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.name)}
            className="cursor-pointer p-4 flex flex-col items-center shadow-lg text-center"
          >
            <img
              className="h-[140px] w-[140px] rounded-lg object-cover ml-auto mr-auto"
              src={item.img}
              alt={item.text}
            />
            <p className="mt-2 text-center text-sm font-medium">
              {item.text}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
