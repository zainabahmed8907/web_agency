import React from "react";
import arrow from "../assets/img/arrow.png";

const ServiceContainer = ({serviceImg,serviceText}) => {
  return (
    <div className="service-container lg:mr-20">
      <div className="flex justify-center mb-4 align-center">
        <img src={serviceImg} alt="" className="shadow-xl rounded-full" />
      </div>
      <div>
        <p className="text-center font-bold text-sm ">
          {serviceText}
        </p>
      </div>
      <div className="flex justify-center mt-4 mb-10 lg:mb-0">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default ServiceContainer;
