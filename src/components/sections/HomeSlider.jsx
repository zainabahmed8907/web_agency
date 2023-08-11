import React from "react";
import SliderCard from "../SliderCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-[#F5F5F5] pb-2 pt-2 lg:pt-0 pb-10">
        <div className="lg:pt-10 lg:m-20 m-10">
          <p className="font-bold text-2xl">Lorem Ipsum</p>
          <p className="mt-4 lg:w-96 text-sm mb-10">
            lorem ipsum is simply dummy text of the priniting and typesetting
            industry.
          </p>

          <Slider {...settings}>
            <SliderCard pillbgColor="#bdf3d8" pilltextColor="#0CBE64" />
            <SliderCard pillbgColor="#f79999" pilltextColor="#DC0000" />
            <SliderCard pillbgColor="#eab4f7" pilltextColor="#B000DC" />
            <SliderCard pillbgColor="#8bd3ed" pilltextColor="#0058DC" />
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HomeSlider;
