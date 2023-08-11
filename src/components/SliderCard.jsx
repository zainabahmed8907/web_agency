import React from "react";

const SliderCard = ({ pillbgColor, pilltextColor }) => {
  return (
    <div className="bg-white h-72 lg:w-80 w-72 p-4 rounded-xl shadow-lg ">
      <p
        className={` rounded w-28 m-4 px-2 py-1`}
        style={{ backgroundColor: pillbgColor, color: pilltextColor }}
      >
        Lorem Ipusm
      </p>
      <p className="text-lg font-bold m-4">Lorem Ipsum</p>
      <p className="text-sm m-4 text-justify">
        Lorem ipsum is simply dummy text of the printing and typing industry.
        Lorem ipsum has been the industry's standard dummy text since the 1500s.
      </p>
      <div className="flex justify-end ">
        <p className="mr-2 text-sm mt-4 text-[#DC7000] font-bold">Read More</p>
      </div>
    </div>
  );
};

export default SliderCard;
