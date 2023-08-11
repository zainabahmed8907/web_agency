import React from "react";


const Hero = ({ img, minitext, mainText, paraDesc, buttonText }) => {
  return (
    <div >
      <div className="flex flex-wrap lg:flex-nowrap ">
        <div className="text-container">
          <p className="text-[#DC7000] text-lg font-bold mb-4">{minitext}</p>
          <p className="lg:text-5xl text-4xl font-bold w-80 " style={{lineHeight:"60px"}}>
            {mainText}
          </p>
          <p className="lg:w-96 w-84 font-medium mt-7  pr-3
          text-xl lg:text-sm" style={{ lineHeight: "30px" }}>
            {paraDesc}
          </p>
          <button className="mt-10 bg-[#FA8305] rounded-3xl w-30 px-4 py-2 text-white">
            {buttonText}
          </button>
        </div>
        <div className="img-container">
          <img src={img} alt="heromain" className="w-auto h-auto lg:-mt-20 lg:block hidden" />
        </div>
      </div>
   
    </div>
  );
};

export default Hero;
