import React from "react";

const DescContainer = ({ img, descHeading }) => {
  return (
    <div className="lg:pt-2 m-10 lg:m-20 ">
      <div className="flex lg:flex-row flex-col flex-col-reverse">
        <img src={img} alt="" />
        <div>
          <p className="lg:text-2xl font-bold text-shadow p-2 text-lg">{descHeading}</p>
          <p className="mt-10 text-sm lg:text-lg">
            Lorem ipsum is simply the dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a gallery of
            typeand scambled it to make a type speciman book. It has survived
            not only five centuries.
          </p>
          <p className="mt-10 text-sm lg:text-lg">
            Lorem ipsum is simply the dummy text of the printing and typesetting
            industry.
          </p>
          <button type="button" className="mt-10 bg-[#DC7000] w-40 p-2 text-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default DescContainer;
