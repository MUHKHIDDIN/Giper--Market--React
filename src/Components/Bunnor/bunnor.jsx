import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBunnor } from "../../Components/Bunnor/Service/Query/use-bunor";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        right: "10px",
        zIndex: 1,
        width: "40px",
        height: "40px",
        background: "#1f1d1d",
        color: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        left: "10px",
        zIndex: 1,
        width: "40px",
        height: "40px",
        background: "#000000",
        color: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

export const Bunnor = () => {
  const { data } = useBunnor();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="relative w-full h-[60vh] lg:h-[80vh]">
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id} className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={item.img}
              alt={item.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
